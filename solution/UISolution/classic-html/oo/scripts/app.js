//event handlers
let prdSvc=new ProductService();
let theProduct1={ id:12, title:"gerbera", description:"wedding Flower",unitprice:5, stackavailable:9000};
prdSvc.create(theProduct1);


let theProduct2={ id:13, title:"rose", description:"valentine Flower",unitprice:15, stackavailable:19000};
prdSvc.create(theProduct2);

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