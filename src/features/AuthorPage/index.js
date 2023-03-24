
import { Container } from "../../common/Container/styled";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <h1>O autorze</h1>
    <Section
      title="Albrecht Barton"
      body={
        <>
          <p>
            <strong>Hej! </strong>
          </p>
          <p>
            Aktualnie uczę się
            <b> Reacta </b> razem z całą grupą <b>You</b>Code!
          </p>
          <p>
            By już w któtce programować na całego. Interesuje się podróżami w egzotyczne miejsca np. <em>Dubaj, Bangkok</em> czy <em>Egipt</em>  i poznawaniem ich kultury. Uwielbiam tęż odkrywać wyjątkowe miejsca, a przy tym robić mnóstwo fantastyczch zdjęć.
          </p>
          <p>
            Zobacz moje zdjęcia 🠲 <a href="https://www.instagram.com/vet.albi/" target="_blank"><strong>Instagram</strong></a>
          </p>
          <p>
            Wejdź też na mój 🠲 <a href="https://github.com/Albrecht-Albi" target="_blank"><strong> GitHub</strong></a>
          </p>



        </>}
    />
  </Container >
);

export default AuthorPage;


