import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProjects } from "../Redux/actions/actions.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
    return () => {
      dispatch(getAllProjects());
    };
  }, [dispatch]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner slider">
          <div className="carousel1 carousel-item active">
            <div className="carousel-caption d-md-block">
              <h2 className="titSlider">
                Sistemas de riego para mantener vivos los campos
              </h2>
              <a href="#contacto">
              <button type="button" name="button" className="btnWhite">
                <p className="pBtnBlue">CONTACTANOS</p>
              </button>
              </a>
              <article className="divFlex">
                <img className="imgIcon" src="images/email.png" alt="" />
                <img className="imgIcon" src="images/facebook.png" alt="" />
                <img className="imgIcon" src="images/instagram.png" alt="" />
                <img className="imgIcon" src="images/whatsapp.png" alt="" />
              </article>
            </div>
          </div>
          <div className="carousel2 carousel-item slider">
            <div className="carousel-caption d-md-block">
              <h2 className="titSlider">
                Sistemas de riego para mantener vivos los campos
              </h2>
              <a href="#contacto">
              <button type="button" name="button" className="btnWhite">
                <p className="pBtnBlue">CONTACTANOS</p>
              </button>
              </a>
              <article className="divFlex">
                <img className="imgIcon" src="images/email.png" alt="" />
                <img className="imgIcon" src="images/facebook.png" alt="" />
                <img className="imgIcon" src="images/instagram.png" alt="" />
                <img className="imgIcon" src="images/whatsapp.png" alt="" />
              </article>
            </div>
          </div>
          <div className="carousel3 carousel-item slider">
            <div className="carousel-caption  d-md-block">
              <h2 className="titSlider">
                Sistemas de riego para mantener vivos los campos
              </h2>
              <a href="#contacto">
              <button type="button" name="button" className="btnWhite">
                <p className="pBtnBlue">CONTACTANOS</p>
              </button>
              </a>    
              <article className="divFlex">
                <img className="imgIcon" src="images/email.png" alt="" />
                <img className="imgIcon" src="images/facebook.png" alt="" />
                <img className="imgIcon" src="images/instagram.png" alt="" />
                <img className="imgIcon" src="images/whatsapp.png" alt="" />
              </article>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon prev"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon next"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section id="nosotros">
        <h2 className="title2">NOSOTROS</h2>
        <hr className="linetHome" />
        <p className="parrSection">
          Punto AR nace para brindar una soluci??n a los productores del Valle
          Inferior del R??o Colorado frente a la emergencia h??drica que atraviesa
          la cuenca del R??o Colorado y, por ende, la zona sur de la Provincia de
          Buenos Aires.
        </p>
      </section>
       <article className="boxGreenLines">
        <div className="greenLine"></div>
        <div className="greenLine"></div>
      </article>
      <section>
        <img className="bumb" src="images/bombilla.png" alt="" />
        <h3 className="title3Blue">
          ??Necesitas ayuda para encontrar qu?? producto es el correcto <br />
          para tu campo?
        </h3>
        <h3 className="title3">
          Te ayudaremos a encontrar la soluci??n que necesitas.
        </h3>
      </section>
      <section id="servicios">
        <h2 className="title2">SERVICIOS</h2>
        <hr className="linetHome" />
        <p className="parrSection">
        En Punto Ar realizamos diagn??stico, dise??o y planificaci??n de sistemas agropecuarios
productivos bajo riego de precisi??n.
Nos enfocamos en un sistema integral de trabajo que incluye informes de las
potencialidades productivas del cultivo, como tambi??n un an??lisis econ??mico: el aval para
financiaci??n del proyecto para presentaci??n ante entidades crediticias y la puesta en marcha
del proyecto.
        </p>
        <div className="divFlexCercles">
        <a href="/servicios"> 
          <div className="cercleContainer">
            <div className="cercle">
                <img className="iconCercle" src="images/brote.png" alt="" />
            </div>
            <p className="parrCercle">Equipos de riego</p>
          </div>
          </a>
          <a href="/servicios">
          <div className="cercleContainer">
            <div className="cercle">
              <img className="iconCercle" src="images/zumbido.png" alt="" />
            </div>
            <p className="parrCercle">Equipos de riego</p>
          </div>
          </a>
          <a href="/servicios">
          <div className="cercleContainer">
            <div className="cercle">
              <img className="iconCercle" src="images/checked.png" alt="" />
            </div>
            <p className="parrCercle">Equipos de riego</p>
           </div>
           </a>
          <a href="/servicios">
          <div className="cercleContainer">
            <div className="cercle">
              <img className="iconCercle" src="images/sistema-de-riego.png" alt="" />
            </div>
            <p className="parrCercle">Equipos de riego</p>
          </div>
          </a>
        </div>
        <h3 className="title3">??Quieres saber m??s?</h3>
        <a href="#contacto">
        <button class="btnsHome" type="submit"><p class="parrBtnFoo">CONTACTANOS</p></button>
        </a>
      </section>
      <br />
      <section id="proyectos">
        <h2 className="title2">PROYECTOS</h2>
        <hr className="linetHome" />
        <article className="card cardPrcBlue">
          <img className="imgCard" src="images/maiz.jpg" alt="" />
          <div className="boxCard">
            <h4 className="titCardBlues">PRODUCTIVOS INTEGRALES</h4>
            <p className="parrCard">
            An??lisis macro t??cnico y productivo previo a la siembra. Incluye tanto la planificaci??n del
riego del cultivo como la viabilidad productiva y econ??mica del sembrado.
            </p>
            <button type="button" name="button" className="btnCard bnBlue">
              <a href="/productivosintegrales">
                <div className="divFlexs">
                  <p className="pBtnCardProjects vrBlue">VER M??S</p>
                  <img className="imgNext" src="images/nextBlue.png" alt="" />
             </div >
              </a>
            </button>
          </div>
        </article>
        <article className="card cardPrc">
          <div className="boxCard">
            <h4 className="titCardGreen">RIEGO POR GOTEO</h4>
            <p className="parrCard">
            Planeamiento y dise??o de sistemas de riego para cultivos de distintas caracter??sticas. Consult?? nuestras propuestas para la siembra de cebolla, ma??z, manzano, olivos, almendros y otras hort??colas. 
            </p>
            <button type="button" name="button" className="btnCard bnGreen">
              <a href="/sistemasderiego">
                <div className="divFlexs">
                  <p className="pBtnCardProjects vrGreen">VER M??S</p>
                  <img className="imgNext" src="images/nextGreen.png" alt="" />
             </div >
              </a>
            </button>
          </div>
          <img className="imgCard" src="images/maiz.jpg" alt="" />
        </article>
      </section>

      <Footer />
    </div>
  );
}
