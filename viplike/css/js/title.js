       var txt="Trang quản trị - C1609L - ";
        var espera=200;
        var refresco=null;
        function rotulo_title()
        {
            document.title=txt;
            txt=txt.substring(1,txt.length)+txt.charAt(0);
            refresco=setTimeout("rotulo_title()",espera);
        }
        rotulo_title();