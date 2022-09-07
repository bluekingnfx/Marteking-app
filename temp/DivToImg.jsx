import html2canvas from "html2canvas";
import React from "react";

const PrintBill = async (e) => {
  const bill = document.getElementById("Bill");
  const img = document.getElementById("displayImg");
  const height = bill.clientHeight;
  img.innerHTML = "";
  const canvas = await html2canvas(bill,{width:300,height:height,color:"white"})
  document.getElementById("displayImg").append(canvas)
};

const PrintImg = () => {
  return (
    <>
      <button onClick={(e) => PrintBill(e)}>Print Bill</button>
      <div
        id={"Bill"}
        style={{
          width: "300px",
          height: "max-content",
          color: "white",
          backgroundColor: "black"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis eleifend elit. Donec lectus sem, scelerisque sit amet facilisis
        quis, gravida a lacus. Nunc at lorem egestas, gravida lorem quis,
        pulvinar ante. Quisque id tempus libero. Mauris hendrerit nunc risus, ac
        laoreet lectus gravida et. Nam euismod magna ac enim posuere sagittis.
        Fusce at egestas enim, eu hendrerit enim.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Pellentesque quis eleifend elit. Donec
        lectus sem, scelerisque sit amet facilisis quis, gravida a lacus. Nunc
        at lorem egestas, gravida lorem quis, pulvinar ante. Quisque id tempus
        libero. Mauris hendrerit nunc risus, ac laoreet lectus gravida et. Nam
        euismod magna ac enim posuere sagittis. Fusce at egestas enim, eu
        hendrerit enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque quis eleifend elit. Donec lectus sem, scelerisque sit amet
        facilisis quis, gravida a lacus. Nunc at lorem egestas, gravida lorem
        quis, pulvinar ante. Quisque id tempus libero. Mauris hendrerit nunc
        risus, ac laoreet lectus gravida et. Nam euismod magna ac enim posuere
        sagittis. Fusce at egestas enim, eu hendrerit enim.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Pellentesque quis eleifend elit.
        Donec lectus sem, scelerisque sit amet facilisis quis, gravida a lacus.
        Nunc at lorem egestas, gravida lorem quis, pulvinar ante. Quisque id
        tempus libero. Mauris hendrerit nunc risus, ac laoreet lectus gravida
        et. Nam euismod magna ac enim posuere sagittis. Fusce at egestas enim,
        eu hendrerit enim.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque quis eleifend elit. Donec lectus sem, scelerisque sit
        amet facilisis quis, gravida a lacus. Nunc at lorem egestas, gravida
        lorem quis, pulvinar ante. Quisque id tempus libero. Mauris hendrerit
        nunc risus, ac laoreet lectus gravida et. Nam euismod magna ac enim
        posuere sagittis. Fusce at egestas enim, eu hendrerit enim.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Pellentesque quis eleifend
        elit. Donec lectus sem, scelerisque sit amet facilisis quis, gravida a
        lacus. Nunc at lorem egestas, gravida lorem quis, pulvinar ante. Quisque
        id tempus libero. Mauris hendrerit nunc risus, ac laoreet lectus gravida
        et. Nam euismod magna ac enim posuere sagittis. Fusce at egestas enim,
        eu hendrerit enim.
      </div>
      <div id="displayImg">here</div>
    </>
  );
};

export default PrintImg;