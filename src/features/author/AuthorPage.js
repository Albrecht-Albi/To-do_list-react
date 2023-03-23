
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

export default () => (
  <Container>
    <Header
      title="O autorze" />
    <Section
      title="Albrecht Barton"
      body={
        <>
          <p>
            <strong>Hej! </strong>
          </p>
          <p>
            Aktualnie uczę się
            <b> Reacta </b> razem z całą społecznością <b>You</b>Code!
          </p>
          <p>
            Interesuje się podróżami w ciepłe miejsca jak np. <em>Dubaj, Bangkok</em> czy <em>Egiptem</em>  i poznawaniem ich kultury. Oraz
            rozwijaniem się w <em> fotografi</em>.
          </p>
        </>}
    />
  </Container>
);



