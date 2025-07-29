
<script>
// import Navv from '@/components/Nav.vue'
// import HelloWorld from '@/components/HelloWorld.vue'
import Papa from 'papaparse'

export default {
  data() {
    return {
      jadwal: [],
      event: [],
      cellValue: "week",
      imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczMNAZuPO-z9r9kKNGsHtDug8A7_njVzkqdY3P90iRXbtHlyZeqgRoYfO3u2hlnSgNc8t6LHZiOVpWmTbskxL9fSa4lYrjFIDP8PuRN1tbwD2hXeQYWsx95fzQzbvDa0D15irV5iBOfGDPl09vavsyYQ=w683-h512-s-no"
    }
  },
  methods: {
    async fetchCSV(url, target) {
      try {
        const response = await fetch(url)
        const csvText = await response.text()
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            this[target] = results.data
            if(this[target][0].week){
              this.cellValue = results.data[0].week;
            }
          }
        })
      } catch (err) {
        console.error(`Failed to load ${url}:`, err)
      }
    },
    openInNewTab(url) {
      if(url){
        window.open(url, '_blank');
      }
    },
    rWA() {
      window.open('https://whatsapp.com/channel/0029VapHnUnL7UVaqcyDMB3v', '_blank');
    },
    rYT() {
      window.open('https://www.youtube.com/@gkigmm', '_blank');
    },
    rigpemuda() {
      window.open('https://www.instagram.com/komdagkigmm/?hl=id', '_blank');
    },
    rigremaja() {
      window.open('https://www.instagram.com/koremgkigmm/?hl=id', '_blank');
    },
    rgithub() {
      window.open('https://github.com/pitlimitCode?tab=repositories', '_blank');
    },
    // rfigma() {
    //   window.open('https://www.figma.com/design/jPlJbEhQ13FtuS5bUCG2yg/GKI-GMM?node-id=0-1&node-type=canvas', '_blank');
    // },
    toTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    const JADWAL_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXnnMMZTaLfImSb_kPPuXgS_krhqutRyHqEHRzcEYhKNFsuy7xlbC8sORL3a_sxPXRJPERyvOPoneD/pub?gid=0&single=true&output=csv'
    const EVENT_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSXnnMMZTaLfImSb_kPPuXgS_krhqutRyHqEHRzcEYhKNFsuy7xlbC8sORL3a_sxPXRJPERyvOPoneD/pub?gid=1378819320&single=true&output=csv'

    this.fetchCSV(JADWAL_URL, 'jadwal')
    this.fetchCSV(EVENT_URL, 'event')
  }
};
</script> 

<template>
  <div class="page b1">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <header class="div1">
      <div class="widthRange centerH">
        <div class="centerH" style="width:30%;">
          <img alt="Vue logo" src="../assets/gki2.png" class="logoImg">
          <!-- Logo GKI -->
        </div>
        <div style="width:70%;" class="flex flexRC centerH centerV title">
          <div class="centerH flexMargin">Gereja Kristen Indonesia</div>
          <div class="centerH flexMargin">Griya Merpati Mas</div>
        </div>
      </div>

      <!-- <div>
        <h2>Kegiatan Besar</h2>
        <ul>
          <li v-for="(item, i) in event" :key="i">
            {{ item.id }} - {{ item.title }} - {{ item.time }} - {{ item.img }} - {{ item.desc }} - {{ item.event }} -
            {{ item.pass }} - {{ item.urlyt }} - {{ item.urlgdrv }} - {{ item.gdrv }}
          </li>
        </ul>
      </div> -->

    </header>
    <div class="div2">
      
      <div class="widthRange">

        <h3 class="centerH">Kebaktian Sepekan</h3>
        <h3 class="centerH">{{ cellValue }}</h3>
      </div>
      <div class="centerH">
        <table class="table">
          <tr>
            <th>Kebaktian</th>
            <th>Hari</th>
            <th>Jam</th>
          </tr>
          <!-- <tr>
            <td>Umum 1</td>
            <td>Minggu</td>
            <td>07.00 WIB</td>
          </tr>
          <tr>
            <td>Umum 2</td>
            <td>Minggu</td>
            <td>09.00 WIB</td>
          </tr>
          <tr>
            <td>Pra-Remaja</td>
            <td>Minggu</td>
            <td>07.00 WIB</td>
          </tr>
          <tr>
            <td>Sekolah Minggu</td>
            <td>Minggu</td>
            <td>09.00 WIB</td>
          </tr>
          <tr>
            <td>Remaja-Pemuda</td>
            <td>Minggu</td>
            <td>11.00 WIB</td>
          </tr>
          <tr>
            <td>Dewasa</td>
            <td>Sabtu</td>
            <td>16.00 WIB</td>
          </tr> -->
          <tr v-for="(item, i) in jadwal" :key="i"  @click="openInNewTab(item.img)" :style="{ cursor: item.img ? 'pointer' : 'default' }">
            <td> {{ item.title }} </td>
            <td> {{ item.day }} </td>
            <td> {{ item.time }} </td>
            <!-- {{ item.id }} - {{ item.title }} - {{ item.day }} - {{ item.time }} - {{ item.img }} - {{ item.desc }} - {{ item.week }} -->
          </tr>

        </table>
      </div>
    </div>
    <div class="div3">
      <div class="widthRange flexRC centerH centerV">
        <div class="address">
          <div class="addrMain">
            <img alt="Vue logo" src="../assets/loc.svg" class="iconLoc">
            Blok C31 Kavling 11-14,
          </div>
          <div class="flexCR addrDetail">
            <div class="flexMargin">Kecamatan Periuk,</div>
            <div class="flexMargin">Kota Tangerang,</div>
            <div class="flexMargin">Provinsi Banten</div>
          </div>
        </div>
        <div class="gmaps bc4 centerV centerH">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6752833155288!2d106.5777468!3d-6.1742099999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffa89c40930d%3A0xf098ab033c0b864b!2sGKI%20Griya%20Merpati%20Mas!5e0!3m2!1sid!2sid!4v1753778696723!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <!-- Google maps (coming soon) -->
          <!-- <GoogleMap
            api-key="YOUR_GOOGLE_MAPS_API_KEY"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
          >
          <Marker :options="{ position: center }" />
          </GoogleMap> -->
        </div>
      </div>
    </div>
    <div class="div4">
      <div class="widthRange flexRC centerH">
        <div class="flexMargin centerH centerV paddingTD">Media Sosial:</div>
        <div class="flexMargin centerH centerV paddingTD" @click="rWA">
          <img alt="Vue logo" src="../assets/waChn.png" class="iconSos">
          (WhatsApp Channel) GKI GMM
        </div>
        <div class="flexMargin centerH centerV paddingTD" @click="rYT">
          <img alt="Vue logo" src="../assets/yt.svg" class="iconSos">
          GKI GMM
        </div>
        <div class="flexMargin centerH centerV paddingTD" @click="rigpemuda">
          <img alt="Vue logo" src="../assets/ig.svg" class="iconSos">
          Komisi Pemuda
        </div>
        <div class="flexMargin centerH centerV paddingTD" @click="rigremaja">
          <img alt="Vue logo" src="../assets/ig.svg" class="iconSos">
          Komisi Remaja
        </div>
      </div>
    </div>
    <footer class="div5">
      <div class="widthRange t2 flexRC centerH centerV">
        <div class="flexMargin centerH" @click="toTop">Unofficial Webiste GKI GMM</div>
        <div class="centerH centerV" @click="rgithub">
          ( Creator:
          <img alt="Vue logo" src="../assets/github.svg" class="iconSos">
          pitlimitcode )
        </div>
        <!-- <div class="centerH centerV" @click="rfigma">
          <img alt="Vue logo" src="../assets/figma.svg" class="iconSos">
        </div> -->
      </div>
    </footer>
  </div>
</template>


<style lang="css">
.bc1{background-color:gold}
.bc2{background-color:green}
.bc3{background-color:blue}
.bc4{background-color:silver}

.b1{background-color:rgb(94, 94, 88);}
.b1{background-color:#fbfaeb;} 
.b2{background-color:#e65a6a;}
.b3{background-color:#7099c5;}
.b4{background-color:#9daac2;}
.b5{background-color:#ccccbe;}
.t1{color:#fbfaeb;}
.t2{color:#e65a6a;}
.t3{color:#7099c5;}
.t4{color:#9daac2;}
.t5{color:#ccccbe;}

.centerH{
  display: flex;
  justify-content: center;
}
.centerV{
  display: flex;
  align-items: center;
}
.flexRC{ display: flex; flex-direction: row; }
.flexCR{ display: flex; flex-direction: column; }
.flexMargin{ margin-right: 8px }a {
  text-decoration: none;
  color: inherit;
  outline: none;
}

a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
.widthRange{
  margin: auto;
  padding: 3vh 0;
  width: 85%;
  max-width: 1200px;
}

.div1{ background-color:#e65a6a; }
/* .div2{ background-color:#e65a6a; } */
.div3{ background-color:#e65a6a; }
/* .div4{ background-color:#e65a6a; } */
.div5{ background-color:#7099c5; }

.page{
  /* height: 100vh; */
  color:#7099c5;
  font-size: 14px;
}
.logoImg {width: 60px;}
.title{
  font-size: 22px;
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border: 1px solid #7099c5;
  margin: 20px;
  width: 500px;
}
th, td {
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #7099c5;
}
th { background-color: #e65a6a }
.address{ width: 30% }
.gmaps{ width: 70%; height:200px }
/* .icon{ width: 12px; } */
.iconLoc{ width: 14px; }
.iconSos{ 
  width: 18px; 
  padding: 0 2px 0 4px;
}
.paddingTD{ padding: 5px 0; }

@media (max-width: 750px) { 
  .page{font-size: 11px;}
  .logoImg {width: 40px;}
  .title{font-size: 14px;}
  table {margin: 8px;}
  th, td {padding: 5px;}
  .address{ width: 30% }
  .iconLoc{ display:none; }
  .gmaps{ width: 70% }
}
@media (max-width: 640px) {
  .flexRC{flex-direction: column;}
  .flexCR{flex-direction: row;}
  .widthRange{ padding: 1.5vh 0; }
  .address{ 
    width: 100%;
    margin-bottom: 1.5vh;
  }
  .gmaps{ width: 100% }
  .addrMain{
    display: flex;
    justify-content: center;
  }
  .addrDetail{
    display: flex;
    justify-content: center;
  }
  .iconLoc{ 
    display: block;
    width: 12px;
  }
  .gmaps{
    height: auto;
  }
}
</style>


