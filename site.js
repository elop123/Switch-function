// switch structure code-along

//let myValue = 35

/* // standard switch med Default
switch (myValue) {
    case 50:
        console.log('var er 50');
        break;

    case 75:
        console.log('var er 75');
        break;

    case 100:
        console.log('var er 100');
        break;


    default:
        console.log('default');
        break;
} */



/* myValue = 20

switch (myValue) {
    case 50:
        console.log('value er 50');
        break;

    // fallthrough
    case 35:
    case 45:
    case 75:
        console.log('enten 35 45 75');
        break;

    case 20:
        console.log('value er 20');
        break;

    default:
        console.log('default');
        break;
} */































GetCategoryData()




function GetCategoryData() {
    //console.log("fetch");
    fetch('https://dummyjson.com/products/categories')

        .then((result) => {
            return result.json()
        }
        )

        .then((json) => {
            //console.log(json);
            categorySorter(json)
        });
}








// controller 
function categorySorter(categoriesToSort) {
    console.log("sort");

    // hoved kategori arrays
    let myElectronics = []
    let myCosmetics = []
    let myHome = []
    let myWomen = []
    let myMen = []
    let myVehicles = []
    let myAccesories = []
    let myGroceries = []
    let myMisc = []

    categoriesToSort.forEach(category => {

        switch (category) {

            case 'laptops':
            case 'lighting':
            case 'smartphones':
            console.log('electronics');
                myElectronics.push(category)
                break;

            case 'fragrances':
            case 'skincare':
            console.log('Care');
                myCosmetics.push(category)
                break;

            case 'furniture':
            case 'home-decoration':
            console.log('home');
                myHome.push(category)
                break;
            
            case 'tops':
            case 'womens-dresses':
            case 'womens-shoes':
            console.log('women');
                myWomen.push(category)
                break;

            case 'mens-shirts':
            case 'mens-shoes':
                console.log('men');
                myMen.push(category)
                break;

            case 'mens-watches':
            case 'womens-watches':
            case 'womens-bags':
            case 'womens-jewellery':
            case 'sunglasses':
                console.log('accesories');
                myAccesories.push(category)
                break;

            case 'automotive':
            case 'motorcycle':
                myVehicles.push(category)

                break;

            case 'groceries':
                myGroceries.push(category)
                break;

            default:

                myMisc.push(category)
                break;
        }

    });

    /* console.log(myElectronics);
    console.log(myCosmetics);
    console.log(myVehicles);
    console.log(myMisc); */

    // build datastructure to view code
    let myNavigationData = [
        {
            superCategoryname: 'Electronics',
            subCategories: myElectronics
        },
        {
            superCategoryname: 'Cosmetics',
            subCategories: myCosmetics
        },
        {
            superCategoryname: 'Home',
            subCategories: myHome
        },
        {
            superCategoryname: 'Women',
            subCategories: myWomen
        },
        {
            superCategoryname: 'Men',
            subCategories: myMen
        },
        {
            superCategoryname: 'Accesories',
            subCategories: myAccesories
        },
        {
            superCategoryname: 'Vehicles',
            subCategories: myVehicles
        },
        {
            superCategoryname: 'Groceries',
            subCategories: myGroceries
        },
        {
            superCategoryname: 'misc',
            subCategories: myMisc
        }

    ]

    BuildNavigation(myNavigationData);

}



// view
function BuildNavigation(myNavigationData) {

    // hvor skal vi bygge navigation
    let myNavElement = document.getElementById('navigation')

    myNavigationData.forEach(superCatData => {

        // ul from category array

        let mySubCats = '<ul>'
        superCatData.subCategories.forEach(subCatName => {
            let myListElement = `<li><div class="navRollover"onClick="navCallback('${subCatName}')">${subCatName}</div></li>`
            mySubCats += myListElement
        });
        mySubCats += '</ul>'

        //console.log(mySubCats);
        //console.log(superCat.superCategoryname);
        let myCatHTML = `<div class="navCategories"><h3 class="navRollover" onClick="navCallback('${superCatData.superCategoryname}')">${superCatData.superCategoryname}</h3>
        ${mySubCats}
        </div>`
        myNavElement.innerHTML += myCatHTML
    });


}


/*
<div class="navCategories">

            <h3 class="navRollover" onClick="navCallback('category 1')">category 1</h3>
            <ul>
                <li>
                    <div class="navRollover" onClick="navCallback('sub 1 of 1')">sub 1</div>
                </li>
                <li>
                    <div class="navRollover" onClick="navCallback('sub 2 of 1')">sub 2</div>
                </li>

            </ul>
        </div>

        */













function navCallback(myItem) {
    console.log(myItem);

}