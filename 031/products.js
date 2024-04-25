console.log("products.js");

const html = `
<div class="product">
    <div>
        <div class="id">ID:{{id}}</div>
        <div class="title">{{title}}</div>
        <div class="price">{{price}}eur</div>
    </div>
    <div>
        <button type="button" value="{{id}}" class="gray --edit">Edit</button>
        <button type="button" value="{{id}}" class="red --delete">Delete</button>
    </div>
</div>
`;

window.addEventListener("load", (_) => {
  const LAST_ID_LS = "productsLastSavedId";
  const PRODUCTS_LS = "productsList";
  let destroyId = 0;
  let updateId = 0;

  const listHtml = document.querySelector(".--list");
  const closeButtons = document.querySelectorAll(".--close");
  const createModal = document.querySelector(".modal--create");
  const storeButton = createModal.querySelector(".--submit");
  const createButton = document.querySelector(".--create");
  const deleteModal = document.querySelector(".modal--delete");
  const deleteButton = deleteModal.querySelector(".--submit");
  const editModal = document.querySelector(".modal--edit");
  const updateButton = editModal.querySelector(".--submit");

  const getId = (_) => {
    const id = localStorage.getItem(LAST_ID_LS);
    if (null === id) {
      localStorage.setItem(LAST_ID_LS, 1);
      return 1;
    }
    localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
    return parseInt(id) + 1;
  };

  const write = (data) => {
    localStorage.setItem(PRODUCTS_LS, JSON.stringify(data));
  };

  const read = (_) => {
    const data = localStorage.getItem(PRODUCTS_LS);
    if (null === data) {
      return [];
    }
    return JSON.parse(data);
  };

  const storeData = (data) => {
    const storeData = read();
    data.id = getId();
    storeData.push(data);
    write(storeData);
  };

  const destroyData = (id) => {
    const data = read();
    const deleteData = data.filter((d) => d.id != id);
    write(deleteData);
  };

  const updateData = (id, data) => {
    const updateData = read().map((p) => (p.id == id ? { ...data, id } : p));
    write(updateData);
  };

  const showModal = (modal) => (modal.style.display = "flex");

  const hideModal = (modal) => {
    modal.querySelectorAll("[name]").forEach((i) => {
      i.value = "";
    });
    modal.style.display = "none";
  };

  const getDataFromForm = (form) => {
    const data = {};
    form.querySelectorAll("[name]").forEach((i) => {
      data[i.getAttribute("name")] = i.value;
    });
    return data;
  };

  const store = (_) => {
    const data = getDataFromForm(createModal);
    storeData(data);
    hideModal(createModal);
    showList();
  };

  const destroy = () => {
    destroyData(destroyId); //LS
    hideModal(deleteModal);
    showList();
  };

  const update = () => {
    const data = getDataFromForm(editModal);
    updateData(updateId, data);
    hideModal(editModal);
    showList();
  };

  const registerDelete = () => {
    document.querySelectorAll(".--delete").forEach((b) => {
      b.addEventListener("click", () => {
        showModal(deleteModal);
        prepareDeleteModal(b.value);
        destroyId = parseInt(b.value);
      });
    });
  };

  const registerEdit = () => {
    document.querySelectorAll(".--edit").forEach((b) => {
      b.addEventListener("click", () => {
        showModal(editModal);
        prepareUpdateModal(b.value);
        updateId = parseInt(b.value);
      });
    });
  };

  const showList = (_) => {
    let productsHtml = "";
    read().forEach((p) => {
      let temp = html;
      temp = temp.replaceAll("{{id}}", p.id);
      temp = temp.replaceAll("{{price}}", p.productPrice);
      temp = temp.replaceAll("{{title}}", p.productTitle);
      productsHtml += temp;
    });
    listHtml.innerHTML = productsHtml;
    registerDelete();
    registerEdit();
  };

  const prepareDeleteModal = (id) => {
    const title = read().find((p) => p.id == id).productTitle;
    deleteModal.querySelector(".product--title").innerText = title;
  };

  const prepareUpdateModal = (id) => {
    const product = read().find((p) => p.id == id);
    editModal.querySelectorAll("[name]").forEach((i) => {
      i.value = product[i.getAttribute("name")];
    });
  };

  const devBtn = document.querySelector(".seed");

  const seed = () => {
    write(seedData);
    localStorage.setItem(LAST_ID_LS, 10);
  };

  devBtn.addEventListener("click", () => {
    seed();
    showList();
  });

  ///////////////////////EVENTS//////////////////////////////////////

  closeButtons.forEach((b) => {
    b.addEventListener("click", () => {
      hideModal(b.closest(".--modal"));
    });
  });

  createButton.addEventListener("click", () => showModal(createModal));

  storeButton.addEventListener("click", () => store());

  deleteButton.addEventListener("click", () => destroy());

  updateButton.addEventListener("click", () => update());

  showList();
});

const seedData = [
  {
    id: 1,
    productTitle: "Didelis stalas",
    productPrice: "50.7",
    productDesc: "Kažkoks didelis medinis stalas",
  },
  {
    id: 2,
    productTitle: "Stalas",
    productPrice: "30.7",
    productDesc: "Kažkoks medinis stalas",
  },
  {
    id: 3,
    productTitle: "Kėdė",
    productPrice: "10.7",
    productDesc: "Kažkokia medinė kėdė",
  },
  {
    id: 4,
    productTitle: "Fotelis",
    productPrice: "100.47",
    productDesc: "Labai patogus fotelis",
  },
  {
    id: 5,
    productTitle: "Sofa",
    productPrice: "300.7",
    productDesc: "Kažkokia sofa",
  },
  {
    id: 6,
    productTitle: "Lova",
    productPrice: "200.7",
    productDesc: "Kažkokia lova",
  },
  {
    id: 7,
    productTitle: "Spinta",
    productPrice: "150.7",
    productDesc: "Kažkokia spinta",
  },
  {
    id: 8,
    productTitle: "Kampinė spinta",
    productPrice: "250.7",
    productDesc: "Kažkokia kampinė spinta",
  },
  {
    id: 9,
    productTitle: "Kampinė sofa",
    productPrice: "400.7",
    productDesc: "Kažkokia kampinė sofa",
  },
  {
    id: 10,
    productTitle: "Kampinė lova",
    productPrice: "300.7",
    productDesc: "Kažkokia kampinė lova",
  },
];
