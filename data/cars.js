//creat nonchanging variables and give them some...
const camaro = {
    id: 'camaro',
    name: 'Chevrolet Camaro SS',
    image: 'https://o.aolcdn.com/images/dims3/GLOB/crop/4869x2739+0+0/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/53169a7326818af49592875acb092e23/206481613/2018ChevyCamaroSS1LE_1.jpg',
    description: 'The sister kissin cousin lover car of Murica!',
    category: 'RWD',
    price: 25
};

const sti = {
    id: 'sti',
    name: 'Subaru Impreza WRX STi',
    image: 'https://images.freeimages.com/images/small-previews/ac9/impreza-1-1557545.jpg',
    description: '#VapeLife #HeadgasketBlewAgain #LowOnOil',
    category: 'AWD',
    price: 30
};

const mini = {
    id: 'mini',
    name: 'Mini Cooper S JCW GP',
    image: 'https://media.fastestlaps.com/mini-cooper-jcw-gp.jpg',
    description: 'For the NoT sO nOrMaL',
    category: 'FWD',
    price: 33
};

const civic = {
    id: 'civic',
    name: 'Honda Civic Type R',
    image: 'https://www.driving.co.uk/s3/st-driving-prod/uploads/2017/11/civic-09.jpg',
    description: 'JDM Fanbois Unite for the King Has Returned',
    category: 'FWD',
    price: 36
};


const evo = {
    id: 'evo',
    name: 'Mitsubishi MR',
    image: 'https://cdn11.bigcommerce.com/s-jyx4srauta/images/stencil/1280x1280/products/151/1425/evox2__66130.1551900094.jpg',
    description: 'The DarkSide of the Force',
    category: 'AWD',
    price: 40
};

const gtr = {
    id: 'gtr',
    name: 'Nissan GTR Nissmo',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/my20-gt-r-nismo-germany-24-source-1562607770.jpg',
    description: 'AAAAAHHHHH!!!!! GODZILLA!!!',
    category: 'AWD',
    price: 113
};

const corvette = {
    id: 'corvette',
    name: 'Chevrolet Corvette ZR1',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-chevrolet-corvette-zr1-placement-test-1527205487.jpg',
    description: 'Must be in a midlife crisis and own jean shorts',
    category: 'RWD',
    price: 120
};

//making all of the variables above a new variable
const rides = [
    camaro, 
    sti, 
    mini, 
    civic, 
    evo, 
    gtr,
    corvette 
];

//exporting the variables to be used somewhere else (out of scope)
export default rides;

