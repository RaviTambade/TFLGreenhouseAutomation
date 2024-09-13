//event handlers
let prdSvc=new ProductService();

const onShowAll=()=>{
    console.log("sdfsdf");
    let products= prdSvc.getAll();
    displayAllProducts(products);
};

const onInsert=()=>{
    console.log("Sdfsdfs");
    let product=acceptProductFromUI();
    prdSvc.create(product);

    let products= prdSvc.getAll();
    displayAllProducts(products);
};

const onUpdate=()=>{
    let product=acceptProductFromUI();
    prdSvc.update(product);

    let products= prdSvc.getAll();
    displayAllProducts(products);
};

const onRemove=()=>{
    let product=acceptProductFromUI();
    prdSvc.remove(product.id);

    let products= prdSvc.getAll();
    displayAllProducts(products);
};