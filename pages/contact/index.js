import Divider from "../../components/Divider";
import Form from "../../components/Form";

function ContactPage() {
  return (
    <>
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
