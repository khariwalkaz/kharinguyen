<?php
function captcha()
{
    $capt = '';
    $chuoi = array('A','B','C','D','E','F','G','H','J','K','L','M','N','O','Q','P','R','S','T','U','W','Z','Y');
    $chuoi1 = $chuoi[rand(0,count($chuoi)-1)];
    $capt .= $chuoi1;
    $so1 = rand(0,9);
    $capt .= $so1;
    $chuoi2 = $chuoi[rand(0,count($chuoi)-1)];
    $capt .= $chuoi2;
    $so2 = rand(10,99);
    $capt .= $so2;
    $chuoi3 = $chuoi[rand(0,count($chuoi)-1)];
    $capt .= $chuoi3;
    return $capt;
			
}
 ?>