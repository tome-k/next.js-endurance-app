import Divider from "../../components/Divider";
import Form from "../../components/Form";
import Map from "../../components/Map";

function ContactPage() {
  return (
    <>
      <Map />
      <Divider img="/images/run_02.jpg" title="Let's run!" position="bottom" />
      <Form />
      <Divider
        img="/images/run_24.jpg"
        title="Get some endorphin!"
        position="center"
      />
    </>
  );
}

export default ContactPage;
