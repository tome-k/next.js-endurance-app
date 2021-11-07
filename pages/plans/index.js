import Head from "next/head";
import { useState } from "react";
import Backdrop from "../../components/Backdrop";
import Modal from "../../components/Modal";

function PlansPage(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>plans | running-passion</title>
        <meta
          name="description"
          content="Running schedules, plans for specific distances, competitions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>plans page</h3>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </>
  );
}

export default PlansPage;
