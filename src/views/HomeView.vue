<template>

  <div class="home">

    <div class="kebaktianumum comp">
      <div class="judul"> Kebaktian Umum (KU)</div>

      <div class="mingguke">
        <div> Hari, tanggal: Minggu, 05 Februari 2023 </div>
        <div> Tema: Hidup yang Berdampak </div>
        <div>
          <table>
            <tr>
              <th></th>
              <th>KU I</th>
              <th>KU II</th>
            </tr>
            <tr>
              <td>Waktu</td>
              <td class="center">07.00 WIB</td>
              <td class="center">09.00 WIB</td>
            </tr>
            <tr>
              <td>Pelayan Firman (PF)</td>
              <td>Pdt. Rumenta Santyani Manurung</td>
              <td>Pdt. Rumenta Santyani Manurung</td>
            </tr>
            <tr>
              <td>Asal Gereja PF</td>
              <td>GKI Griya Merpati Mas</td>
              <td>GKI Griya Merpati Mas</td>
            </tr>
          </table>
        </div>
      </div>
    
      <div class="mingguke">
        <div> Hari, tanggal: Minggu, 29 Januari 2023 </div>
        <div> Tema: Diundang untuk Berbahagia </div>
        <div>
          <table>
            <tr>
              <th></th>
              <th>KU I</th>
              <th>KU II</th>
            </tr>
            <tr>
              <td>Waktu</td>
              <td class="center">07.00 WIB</td>
              <td class="center">09.00 WIB</td>
            </tr>
            <tr>
              <td>Pelayan Firman (PF)</td>
              <td>Pdt. Rumenta Santyani Manurung</td>
              <td>Pdt. Rumenta Santyani Manurung</td>
            </tr>
            <tr>
              <td>Asal Gereja PF</td>
              <td>GKI Griya Merpati Mas</td>
              <td>GKI Griya Merpati Mas</td>
            </tr>
          </table>
        </div>
      </div>

    </div>

    <div class="bacaansepekan comp">
      <div class="judul"> Bacaan Alkitab Sepekan </div>
      <table>
        <tr>
          <th>Hari</th>
          <th>Bacaan</th>
          <th></th> <!-- jarak -->
          <th>Hari</th>
          <th>Bacaan</th>
        </tr>
        <tr>
          <td>Senin, 30 Januari</td>
          <td>
            <div>Rut 1:1-18</div>
            <div>Filemon 1-25</div>
          </td>
          <th>|</th>
          <td>Kamis, 02 Februari</td>
          <td>
            <div>Ulangan 4:1-14; 1</div>
            <div>Yohanes 5:1-5</div>
          </td>
        </tr>
        <tr>
          <td>Selasa, 31 Januari</td>
          <td>
            <div>Rut 2:1-16</div>
            <div>Yakobus 5:1-6</div>
          </td>
          <th>|</th>
          <td>Jumat, 03 Februari</td>
          <td>
            <div>Yesaya 29:1-12</div>
            <div>Yakobus 3:13-18</div>
          </td>
        </tr>
        <tr>
          <td>Rabu, 01 Februari</td>
          <td>
            <div>Rut 3:1-13, 4:13-22</div>
            <div>Lukas 6:17-26</div>
          </td>
          <th>|</th>
          <td>Sabtu, 04 Februari</td>
          <td>
            <div>Yesaya 29:1-12</div>
            <div>Markus 7:1-8</div>
          </td>
        </tr>
      </table>
    </div>

    <div class="socialmedia comp">
      <div class="judul">Social Media</div>
      <div class="center">
        <font-awesome-icon icon="fa-brands fa-youtube" />
        <span><a href="https://www.youtube.com/@gkigmm" target="_blank" rel="noopener">
          GKI GMM
        </a></span>
        (Umum)
        |
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <span><a href="https://www.instagram.com/komdagkigmm/" target="_blank" rel="noopener">
          @komdagkigmm
        </a></span>
        (Pemuda GKI GMM)
      </div>
    </div>
    
  </div>
  <!-- <div>{{tesss}}</div> -->

  <div class="footer">
    <div class="creator">
      <div>	Unofficial GKI GMM Website | Creator <font-awesome-icon icon="fa-brands fa-github" />:
      <span><a href="https://github.com/pitlimitCode" target="_blank" rel="noopener">
        pitlimitCode
      </a></span>
      </div>
    </div>
  </div>

</template>

<style lang="css">

/* 
#000000 black
#fbfaeb cat dinding
#e65a6a atap
#7099c5 kaca
#9daac2 pintu
#ccccbe abu bayangan
*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
.center{
  text-align: center;
}
.home{
  background-color: #fbfaeb;
  /* background-color: yellow; */
  min-height: 90vh;
  
}

.comp{
  padding: 3vh 5vw;
}

.judul{
  color: #e65a6a;
  font-size: 24px;
  font-weight: bold;
}

.mingguke{
  margin-top: 15px;
}

/* text-align: center; */
table{
  margin: 0 auto;
  background-color: #7099c5;
}

/* th, td{
  border: 1px solid red;
} */

tr:hover {
  background-color: #9daac2;
}


a{
  color: #e65a6a;
  text-decoration: none;
}

.footer{
  background-color: #7099c5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
/* .creator{
  
} */

</style>



<script>
  import Navv from '@/components/Nav.vue'
  import tesss from '@/assets/data.js'

  let testes= 'hello33';

  export default {
    name: 'HomeView',
    components: {
      Navv
    },
    data() {
      return{
        tesss
      }
    }
  }
</script>