import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [sonuc, setSonuc] = useState(0);
  const [inputValue, setInputValue] = useState(''); // Form elemanının değerini takip eden state

  function handleChange(event) {
    setSonuc(Number(event.target.value));
    setInputValue(event.target.value); // Input değerini state'e kaydet
  }

  function handleClickFahr() {
    event.preventDefault();
    setSonuc(sonuc * 1.8 + 32);
    document.getElementById('sonucAlani').style.display = 'block';
    document.getElementById('sonucGelecek').innerHTML = { sonuc };
    document.getElementById('birimGelecek').innerHTML = ' ℉';
    document.getElementById('girilenDeger').innerHTML =
      document.getElementById('santigrad').value + ' ºC';
    setInputValue(''); // Input değerini sıfırla
  }

  function handleClickKelvin() {
    event.preventDefault();
    setSonuc(sonuc + 273.15);
    document.getElementById('sonucAlani').style.display = 'block';
    document.getElementById('sonucGelecek').innerHTML = { sonuc };
    document.getElementById('birimGelecek').innerHTML = ' K';
    document.getElementById('girilenDeger').innerHTML =
      document.getElementById('santigrad').value + ' ºC';
    setInputValue(''); // Input değerini sıfırla
  }

  function handleResetClick(event) {
    event.preventDefault();
    setSonuc(0);
    setInputValue(''); // Tüm değerleri sıfırla
    document.getElementById('girilenDeger').innerHTML = '0 ºC';
    document.getElementById('sonucAlani').style.display = 'none';
  }

  function girilenDeger() {
    document.getElementById('girilenDeger').innerHTML =
      document.getElementById('santigrad').value;
  }

  return (
    <div>
      <div className="jumbotron alert  bg-warning">
        <h1>React ve useState ile Sıcaklık Dönüştürücü</h1>
      </div>
      <div id="bilgiKutusu" class="alert alert-warning" role="alert">
        <small>
          Avrupa'da hala yaygın olarak kullanılan{' '}
          <strong>Celsius ölçeği</strong>, 20. yüzyılın ortalarından sonlarına
          doğru birçok ülkede <strong>Fahrenheit ölçeği</strong>nin yerini almış
          olsa da Fahrenheit, hala Birleşik Devletler, Cayman Adaları ve
          Belize'nin resmi ölçeğidir.
          <br />
          Başlangıçta suyun donma noktası (ve buzun erime noktası) olarak
          tanımlanmış olmasına rağmen, Celsius ölçeği, resmi olarak elde
          edilmiş, Kelvin sıcaklık ölçeği ile bağlantılı olarak tanımlanan bir
          ölçektir. Celsius ölçeğindeki sıfır (0 °C), şu anda 273,15 K'ya eşit
          olarak tanımlanmaktadır ve 1 C derecelik fark ile 1 K derecelik fark
          birbirine eşittir; bu da bu ölçeklerden her birinde birim boyutunun
          aynı olduğu anlamına gelir. Bu, suyun kaynama noktası olarak
          tanımlanan 100 °C'nin, 373,15 K'ya eşit olarak tanımlanması anlamına
          gelir.
        </small>
      </div>
      <div className="card alert-info">
        <div className="card-header bg-warning">
          <i class="bi bi-fire"></i> REACTive Sıcaklık Dönüştürücü{' '}
        </div>
        <div className="card-body">
          <form className="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text bg-warning" id="basic-addon1">
                  <i class="bi bi-123" />
                </span>
              </div>
              <input
                id="santigrad"
                type="number"
                class="form-control"
                placeholder="Sıcaklık değerini giriniz."
                aria-label="Username"
                aria-describedby="basic-addon1"
                min="-999"
                max="999"
                value={sonuc}
                onChange={handleChange}
              />
              <div class="input-group-append">
                <span class="input-group-text bg-warning" id="basic-addon2">
                  ºC
                </span>
              </div>
            </div>

            <hr />
            <table>
              <tr>
                <td>
                  <button className="btn btn-danger " onClick={handleClickFahr}>
                    <i class="bi bi-arrow-clockwise"></i> Fahrenheit'a (℉)
                    dönüştür
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary "
                    onClick={handleClickKelvin}
                  >
                    <i class="bi bi-arrow-clockwise"></i> Kelvin'e (K) dönüştür
                  </button>
                </td>
              </tr>
            </table>
          </form>
          <hr />

          <p>
            <b>Girdiğiniz sıcaklık değeri:</b>{' '}
            <b>
              <span id="girilenDeger"></span>
            </b>
          </p>
          <hr />
          <p>
            <b>İstediğiniz birime göre sonuç:</b>
          </p>
          <div id="sonucAlani">
            <span id="sonucGelecek">{sonuc}</span>
            <span id="birimGelecek"></span>
          </div>
          <hr />
          <button
            className="btn btn-success btn-block"
            onClick={handleResetClick}
          >
            <i class="bi bi-trash3"></i> Formu Temizle
          </button>
        </div>
      </div>
      <hr />
      <div id="yazarKutusu" class="alert alert-warning" role="alert">
        <small>
          Tasarım ve Kodlama: Yasin YILDIZ <i class="bi bi-c-square-fill"></i>{' '}
          2023
        </small>
      </div>
    </div>
  );
}
