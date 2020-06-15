

var camera, scene, renderer, canvas, frustum;

var trees,model1,model2,model3,model4;
var clouds,clouds1,clouds2,clouds3;
var bushes, bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, bush9;
var gun, base, world,duck;

var game_over;

var textGeo, textMesh, txt, txtError, textError, text;
var loaderFT;

var all_birds, birds1,birds2,birds3,birds4,birds5;
var wingLeft1, wingRight1, wingLeft2, wingRight2, wingLeft3, wingRight3, wingLeft4, wingRight4;
var leg1, leg2, leg3,leg4;
var flying1,flying2,flying3, flying4, flying5;

var mouse, plane, raycaster, pointOfIntersection;
var raycaster2, pointOfIntersection2;

var texture, material;
var bullets =[];
var count=0;

var difficulty = 3;

var resourcesLoaded = 0;
var resourceSem = 0;

// control for hit ducks
var hit1 = true;
var hit2 = true;
var hit3 = true;
var hit4 = true;
var hit5 = true;

// control for error ducks
var error1 = true;
var error2 = true;
var error3 = true;
var error4 = true;
var error5 = true;

var speed = 20;

// counter of ducks hit by player
var points = 0;

// max number errors before game over
var errors = 5;

// Ducks currently showed
var numBirds = 5;
var showedDucks = [];
var availableDucks = [0,1,2,3,4];
var leftRightDivider = 3; // Ducks 0-2 goes to the left, >=3 goes to the right
var leftRemaining = 3, rightRemaining = 2;
var countElem = [];
var positionDucks  = [];
var directionDucks = [];
var x_keyFramesDucks = [];
var y_keyFramesDucks = [];
var hit = [false, false, false, false, false];
var flying = [null, null, null, null, null];
var wingLeft = [null, null, null, null, null];
var wingRight = [null, null, null, null, null];
var leg = [null, null, null, null, null];
var birds = [null, null, null, null, null];
 

var x_pos = [-0.03,-0.09,-0.12,-0.15,-0.18,-0.21,-0.24,-0.27,-0.3,-0.33,-0.36,-0.40,-0.43,-0.46,-0.49,-0.51,-0.54, -0.57,-0.60,-0.63,-0.66,-0.69];
var y_pos = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75,0.80,0.85,0.90];


var x_sbatti = [-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515];
var y_sbatti = [0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309];
var z_sbatti = [-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799];

var x_sbatti_2 = [0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448];
var y_sbatti_2 = [-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638];
var z_sbatti_2 = [-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626];

// var x_sbatti_3 = [0.644,0.641,0.632,0.620,0.607,0.598,0.594,0.598,0.607,0.620,0.632,0.641,0.644];
// var y_sbatti_3 = [0.651,0.656,0.671,0.690,0.709,0.724,0.730,0.724,0.709,0.690,0.671,0.656,0.651];
// var z_sbatti_3 = [0.402,0.348,0.213,0.038,-0.144,-0.281,-0.337,-0.281,-0.144,0.038,0.213,0.348,0.402];

var x_sbatti_3 = [-0.451,-0.376,-0.186,0.062,0.318,0.510,0.590,0.510,0.318,0.062,-0.186,-0.376,-0.451];
var y_sbatti_3 = [0.534,0.454,0.253,-0.008,-0.279,-0.482,-0.567,-0.482,-0.279,-0.008,0.253,0.454,0.534];
var z_sbatti_3 = [-0.715,-0.705,-0.679,-0.646,-0.611,-0.586,-0.575,-0.586,-0.611,-0.646,-0.679,-0.705,-0.715];



// var x_sbatti = [-0.515,-0.488,-0.415,-0.307,-0.176,-0.034,0.109,0.240,0.348,0.421,0.348,0.240,0.109,-0.034,-0.176,-0.307,-0.415,-0.488]
// var y_sbatti = [0.309,0.283,0.211,0.105,-0.024,-0.164,-0.305,-0.434,-0.540,-0.612,-0.540,-0.434,,-0.305,-0.164,-0.024,0.105,0.211,0.283]
// var z_sbatti = [-0.799,-0.794,-0.781,-0.762,-0.738,-0.713,-0.687,-0.663,-0.644,-0.631,-0.644,-0.663,-0.687,-0.713,-0.738,-0.762,-0.781,-0.794]
// var x_sbatti = [-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515];
// var y_sbatti = [0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309];
// var z_sbatti = [-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799];

// var x_sbatti_2 = [0.644,0.641,0.632,0.620,0.607,0.598,0.594,0.598,0.607,0.620,0.632,0.641,0.644];
// var y_sbatti_2 = [0.651,0.656,0.671,0.690,0.709,0.724,0.730,0.724,0.709,0.690,0.671,0.656,0.651];
// var z_sbatti_2 = [0.402,0.348,0.213,0.038,-0.144,-0.281,-0.337,-0.281,-0.144,0.038,0.213,0.348,0.402];


var x_pos_2 = [-0.60, -0.63,-0.66, -0.69,-0.71,-0.73,-0.76,-0.79,-0.81, -0.84,-0.87, -0.90, -0.93,-0.96,-0.99,-1.01, -1.04, -1.07,-1.10];
var y_pos_2 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75];
var x_sbatti2 = [1.,0.2,-0.2,-1.,-0.2,0.2,0.6]
var x_pos_3 = [-1.10,-1.13,-1.17,-1.20,-1.23,-1.26,-1.29,-1.32,-1.35,-1.38,-1.41, -1.44,-1.47, -1.50,-1.53, -1.56,-1.59, -1.62,-1.65];
var y_pos_3 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75];

var x_pos_4 = [-0.03,0.0,0.03,0.09,0.12,0.15,0.18,0.22,0.25, 0.28,0.31, 0.34,0.37, 0.4,0.43, 0.46,0.49, 0.52,0.55];
var y_pos_4 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75];

var x_pos_5 = [0.70,0.73,0.76,0.79,0.82,0.83,0.86,0.89,0.92, 0.95,0.98, 1.01,1.03, 1.07,1.10, 1.13,1.16, 1.19,1.21];
var y_pos_5 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75];
var interval = 60;

// /******************* LOADING SCREEN **********************/
// var loadingScreen = {
//     scene: new THREE.Scene();
//     camera: new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
//     box: new THREE.Mesh (
//         new THREE.BoxGeometry(0.5,0.5,0.5),
//         new THREE.MeshBasicMaterial({color: 0x4444ff})
//     )
    
// };

/*********************** RESIZE CAMERA *******************/

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

/**************** INTERPOLATION FOR ANIMATION **************/

function interpolation(keyframe_list, tick, interv){
    var i = Math.floor(tick/5)%(keyframe_list.length-1);
    return (1 - (tick%interv)/interv)*keyframe_list[i] + ((tick%interv)/interv)*keyframe_list[i+1]
}


/************************** MOVE GUN *******************************/

function mouseMove(event){

        if (gun){

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            base.lookAt(pointOfIntersection);
        }
}

/**************************** SHOT  *********************************/

function mouseClick(event){

    if (gun){

        var bullet = new THREE.Mesh(new THREE.SphereGeometry(0.05,8,8), new THREE.MeshBasicMaterial({color:0xffffff}));
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, pointOfIntersection);
        bullet.position.set(pointOfIntersection.x,pointOfIntersection.y,pointOfIntersection.z);
        bullet.velocity = new THREE.Vector3(
			-Math.sin(camera.rotation.y),
			0,
			Math.cos(camera.rotation.y)
        );
        setTimeout(function(){
			bullet.alive = false;
			scene.remove(bullet);
        }, 100);

        raycaster2 = new THREE.Raycaster();
        raycaster2.setFromCamera(mouse, camera);
        var intersects = raycaster2.intersectObjects( all_birds.children, true);

        if(intersects.length > 0){


            var x_intersects = intersects[0].point.x.toPrecision(1);
            var y_intersects = intersects[0].point.y.toPrecision(1);
            var z_intersects = intersects[0].point.z.toPrecision(1);
            console.log(x_intersects);

            for(var i = showedDucks.length - 1; i >= 0; i--){
                if(x_intersects == flying[showedDucks[i]].position.x.toPrecision(1)){
                    if (!hit[showedDucks[i]]){
                        if (y_intersects == flying[showedDucks[i]].position.y.toPrecision(1)){
                            points+=1;
                            scene.remove(txt);
                            createText(points);
                            hit[showedDucks[i]] = true;

                        }
                    }
                }
            }
            /*
            if (x_intersects == flying[].position.x.toPrecision(1)){
                if (hit1){
                    if (y_intersects == flying1.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit1 = false;
                    }
                }
            }
            else if (x_intersects == flying2.position.x.toPrecision(1)){
                if (hit2){
                    if (y_intersects == flying2.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit2=false;
                    }
                }
            }
            else if (x_intersects == flying3.position.x.toPrecision(1)){
                if (hit3){
                    if (y_intersects == flying3.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit3=false;
                    }
                }
            }
            else if (x_intersects == flying4.position.x.toPrecision(1)){
                if (hit4){
                    if (y_intersects == flying4.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit4=false;
                    }
                }
            }
            else{
                if (x_intersects == flying5.position.x.toPrecision(1)){
                    if (hit5){
                        if (y_intersects == flying5.position.y.toPrecision(1)){
                            points+=1;
                            scene.remove(txt);
                            createText(points);
                            hit5=false;
                        }
                    }
                }
            }
            */
        }
        bullets.push(bullet);
        scene.add(bullet);

    }

}

/********************* SCORE TEXT ***************************************/

function createText(score){
    text = "Score: ".concat(score.toString());

    loaderFL.load('../three.js-master/examples/fonts/optimer_bold.typeface.json', function(font) {

        var geometry = new THREE.TextGeometry(text, {
            font: font,
            size: 0.08,
            height: 0.00
        });
        geometry.center();

        var material = new THREE.MeshBasicMaterial({
            color: 0xff9933
        });

        txt = new THREE.Mesh(geometry, material);
        txt.position.x = 1.3;
        txt.position.y = -0.5;

        scene.add(txt);
    });
}

/******************************* ERROR TEXT  *********************/
function createError(error){
    textError = "Errors: ".concat(error.toString());

    loaderFL.load('../three.js-master/examples/fonts/optimer_bold.typeface.json', function(font) {

        var geometryError = new THREE.TextGeometry(textError, {
            font: font,
            size: 0.08,
            height: 0.00
        });
        geometryError.center();

        var materialError = new THREE.MeshBasicMaterial({
            color: 0x660000
        });

        txtError = new THREE.Mesh(geometryError, materialError);
        txtError.position.x = 1.3;
        txtError.position.y = -0.62;

        scene.add(txtError);
    });
}



/******************** SPAWN DUCK RANDOMLY **********************/
function chooseStartingPoint() {
    var rndV = -1 + Math.random() *2;
    var startP = new THREE.Vector3(rndV, -0.2, 0.0);
    return startP;
}

function chooseDirection(pos) {
    var xComp; 
    var leftDir = false;
    if((Math.random() < 0.5 && leftRemaining > 0) || rightRemaining == 0) {
        xComp = Math.random(pos.x - 0.6, pos.x - 0.2);
        leftDir = true;
        console.log("/*/*/*//**//*/*/*/*/*/*/*/*/*");
    } else xComp = Math.random(pos.x + 0.2, pos.x + 0.6);
    var p2 = new THREE.Vector3(xComp, -0.17, 0.0);
    return [p2, leftDir];
}

function generateKeyFrames(pos, dir, leftDir){
    var increment = 0.06;
    var x_keyTemp = [], y_keyTemp = [];
    x_keyTemp.push(pos.x);
    y_keyTemp.push(pos.y);
    var dirX = 0.0;
    var dirY = 0.0;
    for (var i = 0; i < 150; i++) {  
        if(leftDir) dirX -= increment*dir.x;
        else dirX += increment*dir.x;
        dirY -= increment*dir.y;
        x_keyTemp.push(pos.x + dirX);
        y_keyTemp.push(pos.y + dirY);
    }
   
    x_keyFramesDucks.unshift(x_keyTemp);
    y_keyFramesDucks.unshift(y_keyTemp);


}

function removeBird(currDuck){
    birds[currDuck].visible = false;
    if (currDuck < leftRightDivider) {
        availableDucks.unshift(currDuck);
        leftRemaining++;
        console.log(availableDucks);
    } else {
        availableDucks.push(currDuck);
        rightRemaining++;
        console.log(availableDucks);
    }
}

/*********************** BIRDS FLYING **************************/
var a  = 0;
function animationBirds(){
    count+=1;

    var m = 5;

    if(resourcesLoaded == numBirds * 4){


    // Generate new ducks if those showed are lower than the expected value
    if(showedDucks.length < difficulty && availableDucks.length != 0){
        for(var i = difficulty - showedDucks.length; i > 0; i--){
            console.log("*******************\nSto aggiungendo un'anatra");
            var currPos = chooseStartingPoint();
            console.log("La sua posizione è ");
            console.log(currPos);
            var [currDir, leftDir] = chooseDirection(currPos);
            //console.log(currDir);
            console.log("La sua direzione è ");
            console.log(currDir);
            console.log(leftDir);

            console.log("Duck available");
            console.log(availableDucks);
            console.log("Used duck");
            console.log(showedDucks);

            if(leftDir) {
                var duckToTake = availableDucks.splice(Math.floor(Math.random()*leftRemaining), 1);
                leftRemaining--;
            }else {
                var duckToTake = availableDucks.splice(Math.floor(leftRemaining+Math.random()*rightRemaining), 1);
                rightRemaining--;
            }
            
            console.log("Valore randomico" + Math.floor(Math.random(0,leftRemaining).toString()));

            console.log("Duck available");
            console.log(availableDucks);
            
            
            console.log("L'id dell'anatra è: " + duckToTake[0].toString());

            generateKeyFrames(currPos, currDir, leftDir);
            flying[duckToTake[0]].position.x = x_keyFramesDucks[0][0];
            flying[duckToTake[0]].position.y = y_keyFramesDucks[0][0];

            console.log("Ho generato i keyFrames");
            console.log(x_keyFramesDucks[0]);

            countElem.unshift(0);
            showedDucks.unshift(duckToTake[0]);
            //console.log(x_keyFramesDucks);
            console.log("Aggiunta anatra: " + duckToTake[0].toString());
            console.log("La posizione dell'anatra è:");
            //console.log(flying[currDuck].position);
            console.log("Used duck");
            console.log(showedDucks);
        }
    }


    for(var i = showedDucks.length-1; i >= 0 ; i--){
        var currDuck = showedDucks.pop();
        var x_keyFrame = x_keyFramesDucks.pop();
        var y_keyFrame = y_keyFramesDucks.pop();
        count = countElem.pop();

        //console.log("curr duck "  + currDuck.toString());
        if (frustum.containsPoint(flying[currDuck].position)) {
            console.log("Anatra " + currDuck.toString() + "ancora dentro lo schermo");
            if (!hit[currDuck]) {
                birds[currDuck].visible = true;
                flying[currDuck].position.x = interpolation(x_keyFrame, count, m);
                flying[currDuck].position.y = interpolation(y_keyFrame, count, m);
                
                if(currDuck < leftRightDivider) {
                    flying[currDuck].rotation.y = 1.0;
                    flying[currDuck].rotation.z = 1.5;
                    flying[currDuck].rotation.x = 0.0;
                    wingLeft[currDuck].position.x = interpolation(x_keyFrame, count, m) - 0.005;
                    wingLeft[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.005;
                    wingLeft[currDuck].position.z = 0.02;
                    wingLeft[currDuck].rotation.x = interpolation(x_sbatti, count, m);
                    wingLeft[currDuck].rotation.y = interpolation(y_sbatti, count, m);
                    wingLeft[currDuck].rotation.z = interpolation(z_sbatti, count, m);

                    wingRight[currDuck].position.x = interpolation(x_keyFrame, count, m) - 0.005;
                    wingRight[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.005;
                    wingRight[currDuck].position.z = -0.05;
                    wingRight[currDuck].rotation.x = -interpolation(x_sbatti_2, count, m);
                    wingRight[currDuck].rotation.y = -interpolation(y_sbatti_2, count, m);
                    wingRight[currDuck].rotation.z = interpolation(z_sbatti_2, count, m);

                    leg[currDuck].position.x = interpolation(x_keyFrame, count, m) + 0.045;
                    leg[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.03;

                } else {
                    flying[currDuck].rotation.y = -1.0;
                    flying[currDuck].rotation.z = 1.5;
                    flying[currDuck].rotation.x = 0.0;
                    wingLeft[currDuck].position.x = interpolation(x_keyFrame, count, m) + 0.005;
                    wingLeft[currDuck].position.y = interpolation(y_keyFrame, count, m) + 0.005;
                    wingLeft[currDuck].position.z = -0.05;
                    wingLeft[currDuck].rotation.x = -interpolation(x_sbatti, count, m);
                    wingLeft[currDuck].rotation.y = interpolation(y_sbatti, count, m);
                    wingLeft[currDuck].rotation.z = -interpolation(z_sbatti, count, m);

                    wingRight[currDuck].position.x = interpolation(x_keyFrame, count, m) + 0.005;
                    wingRight[currDuck].position.y = interpolation(y_keyFrame, count, m) + 0.0005;
                    wingRight[currDuck].position.z = 0.032;
                    wingRight[currDuck].rotation.x = -interpolation(x_sbatti_3, count, m);
                    wingRight[currDuck].rotation.y = interpolation(y_sbatti_3, count, m);
                    wingRight[currDuck].rotation.z = -interpolation(z_sbatti_3, count, m);

                    leg[currDuck].position.x = interpolation(x_keyFrame, count, m) - 0.045;
                    leg[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.05;
                }
                
                showedDucks.unshift(currDuck);
                countElem.unshift(++count);
                x_keyFramesDucks.unshift(x_keyFrame);
                y_keyFramesDucks.unshift(y_keyFrame);
                
            }
            else {
                console.log("UCCISSAAAAAAAAAAAAA");
                

                fall_bird(flying[currDuck], x_keyFrame, y_keyFrame, currDuck);
                fall_bird_part(wingLeft[currDuck], birds[currDuck]);
                fall_bird_part(wingRight[currDuck], birds[currDuck]);


                leg[currDuck].visible = false;
            }

            

        } else {
            console.log("ENTRATO IN AREA RIMOZIONE");
            removeBird(currDuck);

            console.log(availableDucks);
            console.log(x_keyFramesDucks);

            errors -= 1;
            scene.remove(txtError);
            createError(errors);

            //console.log(availableDucks);
            //console.log("Curr duck");
            //console.log(currDuck);
            //console.log("ARRAy");
            //console.log(showedDucks);
            console.log("Rimossa anatra: " + currDuck.toString());
            
            a++;
            if(a==35) resourcesLoaded = 1;
        }
    }


    }
    




    // //console.log(count);
    // if (count<(22*m)){
    //     birds1.visible=true;
    //     if (hit1){

    //         // flying1.position.x = 0.0;
    //         // flying1.position.y = 0.0;
    //         // wingLeft1.position.x = - 0.5 - 0.005;
    //         // wingLeft1.position.y =  - 0.01;
    //         // wingRight1.position.x = 0.5- 0.005;
    //         // wingRight1.position.y =  - 0.01;

    //         flying1.position.x = interpolation(x_pos,count,m);
    //         flying1.position.y = interpolation(y_pos,count,m);
            
    //         wingLeft1.position.x = interpolation(x_pos,count,m) - 0.005;
    //         wingLeft1.position.y = interpolation(y_pos,count,m) - 0.005;
    //         wingLeft1.position.z = 0.0011;
    //         wingLeft1.rotation.x = -interpolation(y_sbatti,count,m);
    //         wingLeft1.rotation.y = interpolation(x_sbatti,count,m);
    //         wingLeft1.rotation.z = -interpolation(z_sbatti,count,m);

    //         wingRight1.position.x = interpolation(x_pos,count,m) - 0.005;
    //         wingRight1.position.y = interpolation(y_pos,count,m) - 0.005;
    //         wingRight1.position.z = -0.05;
    //         //wingRight1.rotation.x = interpolation(x_sbatti,count,m);
    //         // wingRight1.rotation.z = interpolation(x_sbatti,count,m);
    //         wingRight1.rotation.x = interpolation(x_sbatti,count,m);
    //         wingRight1.rotation.y = -interpolation(y_sbatti,count,m);
    //         wingRight1.rotation.z = -interpolation(z_sbatti,count,m);
            
    //         leg1.position.x =  interpolation(x_pos,count,m)+ 0.045;
    //         leg1.position.y = interpolation(y_pos,count,m)- 0.03;


    //     }
    //     else{
    //         fall_birds(flying1, birds1);
    //         fall_birds(wingLeft1, birds1);
    //         fall_birds(wingRight1, birds1);
    //         leg1.visible=false;
    //     }

        /*********************** FOR LEVELS ---> ADD DUCK **************/
        // IF YOU UNCOMMENT THIS PART TWO DUCKS START AT THE SAME TIME
        // "COUNT" VARIABLE IDENTIFIES THE TIME

        // birds2.visible=true;
        // if (flag_birds2){
        //     flying2.position.x = interpolation(x_pos_2,count,60);
        //     flying2.position.y = interpolation(y_pos_2,count,60);
        // }
        // else{
        //     fall_birds(flying2, birds2);
        // }

    // }
    // else{
    //     if (hit1){
    //         if (error1){
    //             errors-=1;
    //             scene.remove(txtError);
    //             createError(errors);
    //             error1 = false;
    //         }

    //     }
    //     if (errors == 0){
    //         clearInterval(game_over);
    //     }
    //     birds1.visible=false;
    //     if(count>(23*m)){
    //         if (count <(38*m)){
    //             birds2.visible=true;
    //             if (hit2){
    //                 flying2.position.x = interpolation(x_pos_2,count,m);
    //                 flying2.position.y = interpolation(y_pos_2,count,m);
                    
    //                 // wingLeft2.position.x = interpolation(x_pos_2,count,60);
    //                 // wingLeft2.position.y = interpolation(y_pos_2,count,60);
    //                 // wingLeft2.rotation.x = interpolation(x_sbatti,count,60);
    //                 // wingLeft2.rotation.z = interpolation(x_sbatti,count,60);

    //                 wingLeft2.position.x = interpolation(x_pos_2,count,m) - 0.005;
    //                 wingLeft2.position.y = interpolation(y_pos_2, count, m) - 0.005;
    //                 wingLeft2.position.z = 0.0011;
    //                 wingLeft2.rotation.x = -interpolation(y_sbatti, count, m);
    //                 wingLeft2.rotation.y = interpolation(x_sbatti, count, m);
    //                 wingLeft2.rotation.z = -interpolation(z_sbatti, count, m);
                    
    //                 wingRight2.position.x = interpolation(x_pos_2, count, m) - 0.005;
    //                 wingRight2.position.y = interpolation(y_pos_2, count, m) - 0.005;
    //                 wingRight2.position.z = -0.1;
    //                 //wingRight1.rotation.x = interpolation(x_sbatti,count,m);
    //                 // wingRight1.rotation.z = interpolation(x_sbatti,count,m);
    //                 wingRight2.rotation.x = interpolation(x_sbatti, count, m);
    //                 wingRight2.rotation.y = -interpolation(y_sbatti, count, m);
    //                 wingRight2.rotation.z = -interpolation(z_sbatti, count, m);
    //                 leg2.position.x =  interpolation(x_pos_2,count,m)+ 0.045;
    //                 leg2.position.y = interpolation(y_pos_2,count,m)- 0.03;
    //             }
    //             else{
    //                 fall_birds(flying2, birds2);
    //                 fall_birds(wingLeft2, birds2);
    //                 fall_birds(wingRight2, birds2);
    //                 leg2.visible=false;
    //             }
    //         }
    //         else{
    //             birds2.visible=false;
    //             if (hit2){
    //                 if (error2){
    //                     errors-=1;
    //                     scene.remove(txtError);
    //                     createError(errors);
    //                     error2 = false;
    //                 }
    //             }
    //             if (errors == 0){
    //                 clearInterval(game_over);
    //             }

    //             if(count>39*m){
    //                 if (count < 57*m){
    //                     birds3.visible=true;
    //                     if (hit3){
    //                         flying3.position.x = interpolation(x_pos_3,count,60) + 0.025;
    //                         flying3.position.y = interpolation(y_pos_3,count,60) + 0.005;
    //                         wingLeft3.position.x = interpolation(x_pos_3,count,60);
    //                         wingLeft3.position.y = interpolation(y_pos_3,count,60);
    //                         wingLeft3.rotation.x = interpolation(x_sbatti,count,60);
    //                         wingLeft3.rotation.z = interpolation(x_sbatti,count,60);

    //                         wingRight3.position.x = interpolation(x_pos_3,count,60)+0.05;
    //                         wingRight3.position.y = interpolation(y_pos_3,count,60)+0.01;
    //                         wingRight3.rotation.x = interpolation(x_sbatti,count,60);
    //                         wingRight3.rotation.z = interpolation(x_sbatti,count,60);
    //                         leg3.position.x =  interpolation(x_pos_3,count,60)+ 0.045;
    //                         leg3.position.y = interpolation(y_pos_3,count,60)- 0.03;
    //                     }
    //                     else{
    //                         fall_birds(flying3, birds3);
    //                         fall_birds(wingLeft3, birds3);
    //                         fall_birds(wingRight3, birds3);
    //                         leg3.visible=false;
    //                     }
    //                 }

    //                 else{
    //                     if (hit3){
    //                         if (error3){
    //                             errors-=1;
    //                             scene.remove(txtError);
    //                             createError(errors);
    //                             error3 = false;
    //                         }
    //                     }
    //                     if (errors == 0){
    //                         clearInterval(game_over);
    //                     }
    //                     birds3.visible=false;
    //                     if (count >58*m){
    //                         if (count < 76*m){

    //                             birds4.visible=true;
    //                             if (hit4){
    //                                 flying4.position.x = interpolation(x_pos_4,count,60) + 0.025;
    //                                 flying4.position.y = interpolation(y_pos_4,count,60) + 0.005;
    //                                 wingLeft4.position.x = interpolation(x_pos_4,count,60);
    //                                 wingLeft4.position.y = interpolation(y_pos_4,count,60);
    //                                 wingLeft4.rotation.x = interpolation(x_sbatti,count,60);
    //                                 wingLeft4.rotation.z = interpolation(x_sbatti,count,60);

    //                                 wingRight4.position.x = interpolation(x_pos_4,count,60)+0.05;
    //                                 wingRight4.position.y = interpolation(y_pos_4,count,60)+0.01;
    //                                 wingRight4.rotation.x = interpolation(x_sbatti,count,60);
    //                                 wingRight4.rotation.z = interpolation(x_sbatti,count,60);
    //                                 leg4.position.x =  interpolation(x_pos_4,count,60)+ 0.045;
    //                                 leg4.position.y = interpolation(y_pos_4,count,60)- 0.03;
    //                             }
    //                             else{
    //                                 fall_birds(flying4, birds4);
    //                                 fall_birds(flying4, birds4);
    //                                 fall_birds(wingLeft4, birds4);
    //                                 fall_birds(wingRight4, birds4);
    //                                 leg4.visible=false;

    //                             }
    //                         }
    //                         else{
    //                             if (hit4){
    //                                 if (error4){
    //                                     errors-=1;
    //                                     scene.remove(txtError);
    //                                     createError(errors);
    //                                     error4 = false;
    //                                 }
    //                             }
    //                             if (errors == 0){
    //                                 clearInterval(game_over);
    //                             }
    //                             birds4.visible=false;
    //                             if (count > 77*m){
    //                                 if (count < 95*m){
    //                                     birds5.visible=true;
    //                                     if (hit5){
    //                                         flying5.position.x = interpolation(x_pos_5,count,60);
    //                                         flying5.position.y = interpolation(y_pos_5,count,60);
    //                                     }
    //                                     else{
    //                                         fall_birds(flying5, birds5);
    //                                     }
    //                                 }
    //                                 else{
    //                                     if (hit5){
    //                                         if (error5){
    //                                             errors-=1;
    //                                             scene.remove(txtError);
    //                                             createError(errors);
    //                                             error5 = false;
    //                                         }
    //                                     }
    //                                     if (errors == 0){
    //                                         clearInterval(game_over);
    //                                     }
    //                                     birds5.visible=false;
    //                                     count =0;

    //                                     flying1.rotation.x = 0.0;
    //                                     flying1.rotation.z = 1.5;

    //                                     flying2.rotation.x = 0.0;
    //                                     flying2.rotation.z = 1.5;

    //                                     flying3.rotation.x = 0.0;
    //                                     flying3.rotation.z = 1.5;

    //                                     flying4.rotation.x = 0.0;
    //                                     flying4.rotation.z = 1.5;

    //                                     flying5.rotation.x = 0.0;
    //                                     flying5.rotation.z = 1.5;

    //                                     hit1=true;
    //                                     hit2=true;
    //                                     hit3=true;
    //                                     hit4=true;
    //                                     hit5=true;

    //                                     error1=true;
    //                                     error2=true;
    //                                     error3=true;
    //                                     error4=true;
    //                                     error5=true;


    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

}

/*************************************** FALL DOWN *******************************/


function fall_bird_part(bird, group){

    if (bird.position.y > -0.2){
        bird.position.y-=0.005;
        bird.rotation.x += 0.05;
    }
    else{
        group.visible = false;

    }
}

function fall_bird(bird, x_keyFrame, y_keyFrame, currDuck){
    if (bird.position.y > -0.2){
        bird.position.y-=0.005;
        bird.rotation.x += 0.05;
        showedDucks.unshift(currDuck);
        countElem.unshift(++count);
        x_keyFramesDucks.unshift(x_keyFrame);
        y_keyFramesDucks.unshift(y_keyFrame);
    }
    else{
        removeBird(currDuck);
        hit[currDuck] = false;
    }
}

window.onload = function init() {

    /********* SCENE  ************/

	scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    /********** CAMERA  **************/

    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.x = 0.0;
	camera.position.y = 0.0;
	camera.position.z = 2.0;
    camera.lookAt(scene.position);

    /********* DIRECTIONALE LIGHT *********/

    var directionalLight =  new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight.position.set( -5, 2, 1 );

    var directionalLight2 =  new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight2.position.set( 5, -2, 1 );

    scene.add(directionalLight);
    scene.add(directionalLight2);


    /************ RENDER ************/

    renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas = renderer.domElement;
    document.body.appendChild(renderer.domElement);

    /*********** RESIZE WINDOW ***********/

    window.addEventListener( 'resize', onWindowResize, false );

    /************* Frustum ******************/
    camera.updateMatrix(); 
    camera.updateMatrixWorld(); 
    frustum = new THREE.Frustum();
    frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));  

    /************* LOAD MODELS 3D ***********/

    var loader = new THREE.GLTFLoader();
    loaderFL = new THREE.FontLoader();

    /***************** GROUPS **************************/

    world = new THREE.Group();
    world.name="world";
    clouds = new THREE.Group();
    clouds.name = "clouds";
    bushes = new THREE.Group();
    bushes.name = "bushes";
    trees = new THREE.Group();
    trees.name = "trees";
    all_birds = new THREE.Group();
    all_birds.name = "all_birds"
    birds[0] = new THREE.Group();
    birds[0].name = "birds1";
    birds[1] = new THREE.Group();
    birds[1].name = "birds2";
    birds[2] = new THREE.Group();
    birds[2].name = "birds3";
    birds[3] = new THREE.Group();
    birds[3].name = "birds4";
    birds[4] = new THREE.Group();
    birds[4].name = "birds5";



    /************ TEXTURE  **************/

    var textureLoader = new THREE.TextureLoader();
    var groundTexture = textureLoader.load( '../three.js-master/examples/textures/terrain/grasslight-big.jpg' );
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set( 256, 256 );
    var groundMaterial = new THREE.MeshBasicMaterial( { map: groundTexture } );
    var groundGeo = new THREE.PlaneGeometry( 200, 200 );
    var mesh = new THREE.Mesh(groundGeo,groundMaterial);
    mesh.position.y =-1.9;
    mesh.rotation.x = -Math.PI/2;
    mesh.doubleSided = true;
    scene.add(mesh);

    /**************** PANEL SCORE AND ERROR ****************/

    createText(points);
    createError(errors);

    /*********** SKY **************************/

    var skyGeo = new THREE.CubeGeometry( 1000, 1000, 1000 );
    var skyMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    var sky = new THREE.Mesh( skyGeo, skyMaterial );
    scene.add(sky);

    /************** 4 TREES ************************/

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model1 =gltf.scene;
        model1.scale.x /=15;
        model1.scale.y /=15;
        model1.scale.z /=15;
        model1.rotation.y = -0.2;
        model1.position.x += 1;
        model1.position.y -=0.2;
        model1.position.z= -0.4;
        trees.add(model1);
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model2 =gltf.scene;
        model2.scale.x /=15;
        model2.scale.y /=15;
        model2.scale.z /=15;
        model2.rotation.y = -5.4;
        model2.position.x -=1.2;
        model2.position.y -=0.2;
        model2.position.z= -0.6;

        trees.add( model2);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model3 =gltf.scene;
        model3.scale.x /=15;
        model3.scale.y /=15;
        model3.scale.z /=15;
        model3.rotation.y = -0.3;
        model3.position.x =1.75;
        model3.position.y -=0.2;
        model3.position.z= -0.6;

        trees.add( model3);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model4 =gltf.scene;
        model4.scale.x /=15;
        model4.scale.y /=15;
        model4.scale.z /=15;
        model4.rotation.y = 0.4;
        model4.position.x =-1.9;
        model4.position.y -=0.2;
        model4.position.z= -0.6;
        trees.add( model4);
    },
    undefined, function ( error )
    { console.error( error ); } );

    world.add(trees);

    /***************** 3 CLOUDS ****************************/

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds1 =gltf.scene;
        clouds1.scale.x /=15;
        clouds1.scale.y /=15;
        clouds1.scale.z /=15;
        clouds1.rotation.x=0.0;
        clouds1.position.y = 0.4;
        clouds1.position.x =-0.2;
        clouds1.position.z = -0.3;
        clouds.add( clouds1);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds2 =gltf.scene;
        clouds2.scale.x /=15;
        clouds2.scale.y /=15;
        clouds2.scale.z /=15;
        clouds2.rotation.x=0.0;
        clouds2.position.y = 0.5;
        clouds2.position.x =-1.2;
        clouds2.position.z = -0.3;
        clouds.add( clouds2);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds3 =gltf.scene;
        clouds3.scale.x /=15;
        clouds3.scale.y /=15;
        clouds3.scale.z /=15;
        clouds3.rotation.x=0.0;
        clouds3.position.y = 0.5;
        clouds3.position.x =0.7;
        clouds3.position.z = -0.3;
        clouds.add( clouds3);
    },
    undefined, function ( error )
    { console.error( error ); } );
    world.add(clouds);

    /*************************** 11 BUSHES ******************************/

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush1 =gltf.scene;
        bush1.scale.x /=200;
        bush1.scale.y /=200;
        bush1.scale.z /=200;
        bush1.rotation.x=0.0;
        bush1.position.y = -0.38;
        bush1.position.x =-0.8;
        bush1.position.z =-2.8;

        bushes.add( bush1);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush2 =gltf.scene;
        bush2.scale.x /=200;
        bush2.scale.y /=200;
        bush2.scale.z /=200;
        bush2.rotation.x=0.0;
        bush2.position.y = -0.38;
        bush2.position.x =-0.8;
        bush2.position.z =-1.0;
        bushes.add( bush2);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush3 =gltf.scene;
        bush3.scale.x /=200;
        bush3.scale.y /=200;
        bush3.scale.z /=200;
        bush3.rotation.x=0.0;
        bush3.position.y = -0.38;
        bush3.position.x =-2.0;
        bush3.position.z =-2.8;
        bushes.add( bush3);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush4 =gltf.scene;
        bush4.scale.x /=200;
        bush4.scale.y /=200;
        bush4.scale.z /=200;
        bush4.rotation.x=0.0;
        bush4.position.y = -0.38;
        bush4.position.x =1.6;
        bush4.position.z =-2.8;
        bushes.add( bush4);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush5 =gltf.scene;
        bush5.scale.x /=200;
        bush5.scale.y /=200;
        bush5.scale.z /=200;
        bush5.rotation.x=0.0;
        bush5.position.y = -0.38;
        bush5.position.x =0.8;
        bush5.position.z =-1.0;
        bushes.add( bush5);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush6 =gltf.scene;
        bush6.scale.x /=200;
        bush6.scale.y /=200;
        bush6.scale.z /=200;
        bush6.rotation.x=0.0;
        bush6.position.y = -0.38;
        bush6.position.x =0.0;
        bush6.position.z =-2.6;
        bushes.add( bush6);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush7 =gltf.scene;
        bush7.scale.x /=200;
        bush7.scale.y /=200;
        bush7.scale.z /=200;
        bush7.rotation.x=0.0;
        bush7.position.y = -0.38;
        bush7.position.x =0.0;
        bush7.position.z =-0.6;
        bushes.add( bush7);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush8 =gltf.scene;
        bush8.scale.x /=200;
        bush8.scale.y /=200;
        bush8.scale.z /=200;
        bush8.rotation.x=0.0;
        bush8.position.y = -0.38;
        bush8.position.x =1.5;
        bush8.position.z =-0.6;
        bushes.add( bush8);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush9 =gltf.scene;
        bush9.scale.x /=200;
        bush9.scale.y /=200;
        bush9.scale.z /=200;
        bush9.rotation.x=0.0;
        bush9.position.y = -0.38;
        bush9.position.x =3;
        bush9.position.z =-2.6;
        bushes.add( bush9);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush10 =gltf.scene;
        bush10.scale.x /=200;
        bush10.scale.y /=200;
        bush10.scale.z /=200;
        bush10.rotation.x=0.0;
        bush10.position.y = -0.38;
        bush10.position.x =-3;
        bush10.position.z =-2.6;
        bushes.add( bush10);
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush11 =gltf.scene;
        bush11.scale.x /=200;
        bush11.scale.y /=200;
        bush11.scale.z /=200;
        bush11.rotation.x=0.0;
        bush11.position.y = -0.38;
        bush11.position.x =-2;
        bush11.position.z =-0.3;
        bushes.add( bush11);
    },
    undefined, function ( error )
    { console.error( error ); } );
    world.add(bushes);

    /************************ GUN **********************************/

    base = new THREE.Group();
    scene.add(base);


    loader.load( './models3D/shotgun/scene.gltf', function ( gltf ) {

        gun =gltf.scene;
        gun.scale.x /=50;
        gun.scale.y /=50;
        gun.scale.z /=50;
        gun.position.x = -0.1;
        gun.position.z = -1.5;
        gun.position.y = -0.5;

        gun.rotation.z = 0;
        gun.rotation.y = -3;
        gun.rotation.x = 0;

        base.add(gun);
    },
    undefined, function ( error )
    { console.error( error ); } );

    /************************** 5 DUCKS  ***************************************/

    loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

        flying[0] = gltf.scene;
        console.log(flying);
        flying[0].scale.x /=55;
        flying[0].scale.y /=55;
        flying[0].scale.z /=55;
        flying[0].rotation.y = 1.0;
        flying[0].rotation.z = 1.5;
        flying[0].rotation.x = 0.0;
        flying[0].position.y = -0.2;
        flying[0].position.x = 0.0;
        birds[0].add(flying[0]);
        birds[0].visible = false;
        
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[0] =gltf.scene;
        wingLeft[0].scale.x /=55;
        wingLeft[0].scale.y /=55;
        wingLeft[0].scale.z /=55;
        wingLeft[0].rotation.y = -0.5;
        wingLeft[0].rotation.z = 0;
        wingLeft[0].rotation.x = 0.2;
        wingLeft[0].position.y = -0.2;
        wingLeft[0].position.x = 0.0;
        birds[0].add(wingLeft[0]);
        birds[0].visible = false;
        
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[0] =gltf.scene;
        wingRight[0].scale.x /=55;
        wingRight[0].scale.y /=55;
        wingRight[0].scale.z /=55;
        wingRight[0].rotation.y = 0.5;
        wingRight[0].rotation.z = 0;
        wingRight[0].rotation.x = 0.2;
        wingRight[0].position.y = -0.2;
        wingRight[0].position.x = 0.0;
        birds[0].add(wingRight[0]);
        birds[0].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[0] =gltf.scene;
        leg[0].scale.x /=40;
        leg[0].scale.y /=40;
        leg[0].scale.z /=40;
        leg[0].rotation.y = 2;
        leg[0].rotation.z = -1;
        leg[0].rotation.x = -0.4;
        leg[0].position.y = -0.26;
        leg[0].position.x = 0.025;
        birds[0].add(leg[0]);
        birds[0].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );




    loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

        flying[1] = gltf.scene;
        console.log(flying);
        flying[1].scale.x /=50;
        flying[1].scale.y /=50;
        flying[1].scale.z /=50;
        flying[1].rotation.y = 1.0;
        flying[1].rotation.z = 1.8;
        flying[1].rotation.x = 0.0;
        flying[1].position.y = -0.2;
        flying[1].position.x = -0.51;
        birds[1].add(flying[1]);
        birds[1].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[1] =gltf.scene;
        wingLeft[1].scale.x /=55;
        wingLeft[1].scale.y /=55;
        wingLeft[1].scale.z /=55;
        wingLeft[1].rotation.y = -0.5;
        wingLeft[1].rotation.z = 0;
        wingLeft[1].rotation.x = 0.2;
        wingLeft[1].position.y = -0.2;
        wingLeft[1].position.x = -0.51;
        birds[1].add(wingLeft[1]);
        birds[1].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[1] =gltf.scene;
        wingRight[1].scale.x /=55;
        wingRight[1].scale.y /=55;
        wingRight[1].scale.z /=55;
        wingRight[1].rotation.y = 0.5;
        wingRight[1].rotation.z = 0;
        wingRight[1].rotation.x = 3;
        wingRight[1].position.y = -0.2;
        wingRight[1].position.x = -0.51;
        birds[1].add(wingRight[1]);
        birds[1].visible =false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[1] =gltf.scene;
        leg[1].scale.x /=40;
        leg[1].scale.y /=40;
        leg[1].scale.z /=40;
        leg[1].rotation.y = 2;
        leg[1].rotation.z = -0.5;
        leg[1].rotation.x = -1;
        leg[1].position.y = -0.25;
        leg[1].position.x = -0.47;
        birds[1].add(leg[1]);
        birds[1].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );
    

    loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

        flying[2] = gltf.scene;
        console.log(flying);
        flying[2].scale.x /=50;
        flying[2].scale.y /=50;
        flying[2].scale.z /=50;
        flying[2].rotation.y = 1.0;
        flying[2].rotation.z = 1.8;
        flying[2].rotation.x = 0.0;
        flying[2].position.y = -0.2;
        flying[2].position.x = -1.10;
        birds[2].add(flying[2]);
        birds[2].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[2] =gltf.scene;
        wingLeft[2].scale.x /=55;
        wingLeft[2].scale.y /=55;
        wingLeft[2].scale.z /=55;
        wingLeft[2].rotation.y = -0.5;
        wingLeft[2].rotation.z = 0;
        wingLeft[2].rotation.x = 0.2;
        wingLeft[2].position.y = -0.2;
        wingLeft[2].position.x = -1.10;
        birds[2].add(wingLeft[2]);
        birds[2].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[2] =gltf.scene;
        wingRight[2].scale.x /=55;
        wingRight[2].scale.y /=55;
        wingRight[2].scale.z /=55;
        wingRight[2].rotation.y = 0.5;
        wingRight[2].rotation.z = 0;
        wingRight[2].rotation.x = 3;
        wingRight[2].position.y = -0.2;
        wingRight[2].position.x = -1.10;
        birds[2].add(wingRight[2]);
        birds[2].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[2] =gltf.scene;
        leg[2].scale.x /=55;
        leg[2].scale.y /=55;
        leg[2].scale.z /=55;
        leg[2].rotation.y = 2;
        leg[2].rotation.z = -0.5;
        leg[2].rotation.x = -1.5;
        leg[2].position.y = -0.25;
        leg[2].position.x = -1.06;
        birds[2].add(leg[2]);
        birds[2].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck3.glb', function ( gltf ) {

        flying[3] = gltf.scene;
        console.log(flying);
        flying[3].scale.x /=50;
        flying[3].scale.y /=50;
        flying[3].scale.z /=50;
        flying[3].rotation.y = -1.0;
        flying[3].rotation.z = 1.8;
        flying[3].rotation.x = 0.0;
        flying[3].position.y = -0.2;
        flying[3].position.x = -0.3;
        birds[3].add(flying[3]);
        birds[3].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[3] =gltf.scene;
        wingLeft[3].scale.x /=55;
        wingLeft[3].scale.y /=55;
        wingLeft[3].scale.z /=55;
        wingLeft[3].rotation.y = -2.5;
        wingLeft[3].rotation.z = 0;
        wingLeft[3].rotation.x = 0.1;
        wingLeft[3].position.y = -0.2;
        wingLeft[3].position.x = -0.3;
        birds[3].add(wingLeft[3]);
        birds[3].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[3] =gltf.scene;
        wingRight[3].scale.x /=55;
        wingRight[3].scale.y /=55;
        wingRight[3].scale.z /=55;
        wingRight[3].rotation.y = 0.5;
        wingRight[3].rotation.z = 0;
        wingRight[3].rotation.x = 0.2;
        wingRight[3].position.y = -0.2;
        wingRight[3].position.x = -0.3;
        birds[3].add(wingRight[3]);
        birds[3].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[3] =gltf.scene;
        leg[3].scale.x /=40;
        leg[3].scale.y /=40;
        leg[3].scale.z /=40;
        leg[3].rotation.y = -0.5;
        leg[3].rotation.z = -1.8;
        leg[3].rotation.x = 0;
        leg[3].position.y = -0.255;
        leg[3].position.x = -0.3;
        birds[3].add(leg[3]);
        birds[3].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

        flying[4] = gltf.scene;
        console.log(flying);
        flying[4].scale.x /=50;
        flying[4].scale.y /=50;
        flying[4].scale.z /=50;
        flying[4].rotation.y = -1.0;
        flying[4].rotation.z = 1.5;
        flying[4].rotation.x = 0.0;
        flying[4].position.y = -0.2;
        flying[4].position.x = 0.70;
        birds[4].add(flying[4]);
        birds[4].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[4] =gltf.scene;
        wingLeft[4].scale.x /=55;
        wingLeft[4].scale.y /=55;
        wingLeft[4].scale.z /=55;
        wingLeft[4].rotation.y = -2.5;
        wingLeft[4].rotation.z = 0;
        wingLeft[4].rotation.x = 0.1;
        wingLeft[4].position.y = -0.2;
        wingLeft[4].position.x = -0.3;
        birds[4].add(wingLeft[4]);
        birds[4].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[4] =gltf.scene;
        wingRight[4].scale.x /=55;
        wingRight[4].scale.y /=55;
        wingRight[4].scale.z /=55;
        wingRight[4].rotation.y = 0.5;
        wingRight[4].rotation.z = 0;
        wingRight[4].rotation.x = 0.2;
        wingRight[4].position.y = -0.2;
        wingRight[4].position.x = -0.3;
        birds[4].add(wingRight[4]);
        birds[4].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[4] =gltf.scene;
        leg[4].scale.x /=40;
        leg[4].scale.y /=40;
        leg[4].scale.z /=40;
        leg[4].rotation.y = -0.5;
        leg[4].rotation.z = -1.8;
        leg[4].rotation.x = 0;
        leg[4].position.y = -0.255;
        leg[4].position.x = -0.3;
        birds[4].add(leg[4]);
        birds[4].visible = false;
        while(resourceSem != 0) {setTimeout(function() {}, 150)}
        resourceSem++;
        resourcesLoaded++;
        resourceSem--;
    },
    undefined, function ( error )
    { console.error( error ); } );


    // loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

    //     flying1 =gltf.scene;
    //     flying1.scale.x /=55;
    //     flying1.scale.y /=55;
    //     flying1.scale.z /=55;
    //     flying1.rotation.y = 1.0;
    //     flying1.rotation.z = 1.5;
    //     flying1.rotation.x = 0.0;
    //     flying1.position.y = -0.2;
    //     flying1.position.x = 0.0;
    //     birds1.add(flying1);
    //     birds1.visible = true;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingLeft1 =gltf.scene;
    //     wingLeft1.scale.x /=55;
    //     wingLeft1.scale.y /=55;
    //     wingLeft1.scale.z /=55;
    //     wingLeft1.rotation.y = -0.5;
    //     wingLeft1.rotation.z = 0;
    //     wingLeft1.rotation.x = 0.2;
    //     wingLeft1.position.y = -0.2;
    //     wingLeft1.position.x = 0.0;
    //     birds1.add(wingLeft1);
    //     birds1.visible = true;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingRight1 =gltf.scene;
    //     wingRight1.scale.x /=55;
    //     wingRight1.scale.y /=55;
    //     wingRight1.scale.z /=55;
    //     wingRight1.rotation.y = 0.5;
    //     wingRight1.rotation.z = 0;
    //     wingRight1.rotation.x = 0.2;
    //     wingRight1.position.y = -0.2;
    //     wingRight1.position.x = 0.0;
    //     birds1.add(wingRight1);
    //     birds1.visible = true;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

    //     leg1 =gltf.scene;
    //     leg1.scale.x /=40;
    //     leg1.scale.y /=40;
    //     leg1.scale.z /=40;
    //     leg1.rotation.y = 2;
    //     leg1.rotation.z = -1;
    //     leg1.rotation.x = -0.4;
    //     leg1.position.y = -0.26;
    //     leg1.position.x = 0.025;
    //     birds1.add(leg1);
    //     birds1.visible = true;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );


    // loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

    //     flying2 =gltf.scene;
    //     flying2.scale.x /=50;
    //     flying2.scale.y /=50;
    //     flying2.scale.z /=50;
    //     flying2.rotation.y = 1.0;
    //     flying2.rotation.z = 1.8;
    //     flying2.rotation.x = 0.0;
    //     flying2.position.y = -0.2;
    //     flying2.position.x = -0.51;
    //     birds2.add(flying2);
    //     birds2.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingLeft2 =gltf.scene;
    //     wingLeft2.scale.x /=55;
    //     wingLeft2.scale.y /=55;
    //     wingLeft2.scale.z /=55;
    //     wingLeft2.rotation.y = -0.5;
    //     wingLeft2.rotation.z = 0;
    //     wingLeft2.rotation.x = 0.2;
    //     wingLeft2.position.y = -0.2;
    //     wingLeft2.position.x = -0.51;
    //     birds2.add(wingLeft2);
    //     birds2.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );


    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingRight2 =gltf.scene;
    //     wingRight2.scale.x /=55;
    //     wingRight2.scale.y /=55;
    //     wingRight2.scale.z /=55;
    //     wingRight2.rotation.y = 0.5;
    //     wingRight2.rotation.z = 0;
    //     wingRight2.rotation.x = 3;
    //     wingRight2.position.y = -0.2;
    //     wingRight2.position.x = -0.51;
    //     birds2.add(wingRight2);
    //     birds2.visible =false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

    //     leg2 =gltf.scene;
    //     leg2.scale.x /=40;
    //     leg2.scale.y /=40;
    //     leg2.scale.z /=40;
    //     leg2.rotation.y = 2;
    //     leg2.rotation.z = -0.5;
    //     leg2.rotation.x = -1;
    //     leg2.position.y = -0.25;
    //     leg2.position.x = -0.47;
    //     birds2.add(leg2);
    //     birds2.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

    //     flying3 =gltf.scene;
    //     flying3.scale.x /=50;
    //     flying3.scale.y /=50;
    //     flying3.scale.z /=50;
    //     flying3.rotation.y =1.0;
    //     flying3.rotation.z = 1.8;
    //     flying3.rotation.x = 0.0;
    //     flying3.position.y = -0.2;
    //     flying3.position.x = -1.10;
    //     birds3.add(flying3);
    //     birds3.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingLeft3 =gltf.scene;
    //     wingLeft3.scale.x /=55;
    //     wingLeft3.scale.y /=55;
    //     wingLeft3.scale.z /=55;
    //     wingLeft3.rotation.y = -0.5;
    //     wingLeft3.rotation.z = 0;
    //     wingLeft3.rotation.x = 0.2;
    //     wingLeft3.position.y = -0.2;
    //     wingLeft3.position.x = -1.10;
    //     birds3.add(wingLeft3);
    //     birds3.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingRight3 =gltf.scene;
    //     wingRight3.scale.x /=55;
    //     wingRight3.scale.y /=55;
    //     wingRight3.scale.z /=55;
    //     wingRight3.rotation.y = 0.5;
    //     wingRight3.rotation.z = 0;
    //     wingRight3.rotation.x = 3;
    //     wingRight3.position.y = -0.2;
    //     wingRight3.position.x = -1.10;
    //     birds3.add(wingRight3);
    //     birds3.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

    //     leg3 =gltf.scene;
    //     leg3.scale.x /=55;
    //     leg3.scale.y /=55;
    //     leg3.scale.z /=55;
    //     leg3.rotation.y = 2;
    //     leg3.rotation.z = -0.5;
    //     leg3.rotation.x = -1.5;
    //     leg3.position.y = -0.25;
    //     leg3.position.x = -1.06;
    //     birds3.add(leg3);
    //     birds3.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/firstpartduck3.glb', function ( gltf ) {

    //     flying4 =gltf.scene;
    //     flying4.scale.x /=50;
    //     flying4.scale.y /=50;
    //     flying4.scale.z /=50;
    //     flying4.rotation.y = -1.0;
    //     flying4.rotation.z = 1.8;
    //     flying4.rotation.x = 0.0;
    //     flying4.position.y = -0.2;
    //     flying4.position.x = -0.3;
    //     birds4.add(flying4);
    //     birds4.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingLeft4 =gltf.scene;
    //     wingLeft4.scale.x /=55;
    //     wingLeft4.scale.y /=55;
    //     wingLeft4.scale.z /=55;
    //     wingLeft4.rotation.y = -2.5;
    //     wingLeft4.rotation.z = 0;
    //     wingLeft4.rotation.x = 0.1;
    //     wingLeft4.position.y = -0.2;
    //     wingLeft4.position.x = -0.3;
    //     birds4.add(wingLeft4);
    //     birds4.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

    //     wingRight4 =gltf.scene;
    //     wingRight4.scale.x /=55;
    //     wingRight4.scale.y /=55;
    //     wingRight4.scale.z /=55;
    //     wingRight4.rotation.y = 0.5;
    //     wingRight4.rotation.z = 0;
    //     wingRight4.rotation.x = 0.2;
    //     wingRight4.position.y = -0.2;
    //     wingRight4.position.x = -0.3;
    //     birds4.add(wingRight4);
    //     birds4.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

    //     leg4 =gltf.scene;
    //     leg4.scale.x /=40;
    //     leg4.scale.y /=40;
    //     leg4.scale.z /=40;
    //     leg4.rotation.y = -0.5;
    //     leg4.rotation.z = -1.8;
    //     leg4.rotation.x = 0;
    //     leg4.position.y = -0.255;
    //     leg4.position.x = -0.3;
    //     birds4.add(leg4);
    //     birds4.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );

    // loader.load( './models3D/birds/duck2/scene.glb', function ( gltf ) {

    //     flying5 =gltf.scene;
    //     flying5.scale.x /=50;
    //     flying5.scale.y /=50;
    //     flying5.scale.z /=50;
    //     flying5.rotation.y = -1.0;
    //     flying5.rotation.z = 1.5;
    //     flying5.rotation.x = 0.0;
    //     flying5.position.y = -0.2;
    //     flying5.position.x = 0.70;
    //     birds5.add(flying5);
    //     birds5.visible = false;
    // },
    // undefined, function ( error )
    // { console.error( error ); } );


    /// QUESTO ERA GIÃ COMMENTATO

    // mltLoader.load("./models3D/duck/I19T6510H6KIQ8UWZV6ONLS80.mtl", function(materials){
    //     materials.preload();
    //     objLoader.setMaterials(materials);
    //     objLoader.load("./models3D/duck/I19T6510H6KIQ8UWZV6ONLS80.obj", function(object){
    //         object.scale.x /= 10;
    //         object.scale.y /= 10;
    //         object.scale.z /= 10;
    //         object.rotation.y = 1.8;
    //         object.rotation.z = 0.6;
    //         object.position.y = -0.2;
    //         object.position.x = 0.3;
    //         duck = object;
    //         scene.add(duck);
    //     });
    // });

    all_birds.add(birds[0]);
    all_birds.add(birds[1]);
    all_birds.add(birds[2]);
    all_birds.add(birds[3]);
    all_birds.add(birds[4]);

    scene.add(all_birds);
    scene.add(world);



    /******************** SET INTERVAL FOR SPAWN DUCKS *******************/

    game_over = setInterval(function(){
        animationBirds();
    }, speed);

    /**************************** MOUSE + GUN *******************************/

    plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 5);
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    pointOfIntersection = new THREE.Vector3();

    document.addEventListener("mousemove",mouseMove, false);
    document.addEventListener("mousedown",mouseClick, false);
    render();

}


function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
