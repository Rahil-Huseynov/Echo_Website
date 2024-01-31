document.getElementById('hamburger').addEventListener('click', function (){
    if(document.getElementById('mobileContainer').style.display == 'block'){
        document.getElementById('mobileContainer').style.display = 'none';
    }
    else{
        document.getElementById('mobileContainer').style.display = 'block';
    }
})