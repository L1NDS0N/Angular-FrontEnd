<?php
/* -----------------------------------------------------------------*/
/*    Não modificar esse código porque pode causar dano no script   */
/*                  Artes Gráficas- Thiago Galatti                  */
/*                     www.artesgraficas.kit.net                    */
/*               e-mail/msn: thiago_galatti@hotmail.com             */
/*                           artesgraficas_wd@hotmail.com           */
/*                        Direitos Autorais                         */
/* -----------------------------------------------------------------*/
?>
<?php echo "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?".">"; ?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Coment&aacute;rios Artes Gr&aacute;ficas</title>
</head>
<style>{  }
BODY {
	scrollbar-face-color: #A6CCE10;
	scrollbar-highlight-color: #228BD0;
	scrollbar-3dlight-color: #A6CCE1;
	scrollbar-darkshadow-color: #A6CCE1;
	scrollbar-shadow-color: #A6CCE1;
	scrollbar-arrow-color: #228BD0;
	scrollbar-track-color: #228BD0;

}
-->
</style>
              <style type=text/css>

A:link { text-decoration: none}

A:visited { text-decoration: none}

              </style>
<style type="text/css"> 
<!--
style1 {
 font-family: Arial, Helvetica, sans-serif;
 color: FF0000;
 font-weight: bold;
 }
 style4 {font-family: Arial, Helvetica, sans-serif; font-size: 12px;
 }
 
#titulo{
 background-color:#0066CC;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 12px;
 color:#000000;
 padding:5px;
 width:450;
 border:1px solid #cccccc;
}

#conteudo{
 font-family: Arial, Helvetica, sans-serif;
 color:#000000;
 font-size: 12px;
 padding:5px;
 width:450;
 border:1px solid #cccccc;
 border-top:0px;
}
-->
</style>
<body bgcolor="#FFFFFF" link="#FFFFFF" vlink="#FFFFFF" alink="#FFFFFF" leftmargin="0" topmargin="0">
<table width="100%" border="0" align="center" bgcolor="#FF9900">
  <tr> 
    <td bgcolor="#0066CC"> 
    <div align="center"><font color="#FFFFFF" size="4" face="Arial, Helvetica, sans-serif"><strong>Coment&aacute;rios</strong></font></div></td>
  </tr>
</table>
<table width="100%" border="0" cellpadding="2">
  <tr>
    <td bgcolor="#0066CC"><p><strong><font color="#FFFFFF">Deixe seu comentario?</font></strong><strong><font color="#FFFFFF"><br />
        </font></strong></p>
    </td>
  </tr>
</table>
<form name="form1" id="form1" method="post" action="../sites/comentarios/?btn=enviar">
  <table width="39%" border="1" bordercolor="#CCCCCC">
    <tr bgcolor="#0066CC"> 
      <td width="23%" valign="top"><font color="#FFFFFF"><strong>Nome:</strong></font></td>
      <td width="77%"> <font color="#000000"> 
        <input name="nome" type="text" id="nome" size="40" />
      </font></td>
    </tr>
    <tr bgcolor="#0066CC"> 
      <td valign="top"><font color="#FFFFFF"><strong>E-mail:</strong></font></td>
      <td> <font color="#000000"> 
        <input name="email" type="text" id="email" size="40" />
      </font></td>
    </tr>
    <tr bgcolor="#0066CC"> 
      <td valign="top"><font color="#FFFFFF"><strong>Mensagem:</strong></font></td>
      <td> <font color="#000000"> 
        <textarea name="mensagem" cols="35" rows="5" id="mensagem"></textarea>
        <br />
        <input type="submit" name="Submit" value="Enviar" />
      </font></td>
    </tr>
  </table>
</form>
<?
include "config.php";
$mostrar = mysql_query("SELECT *, date_format(data, '%d/%m/%y') as data FROM comentarios ORDER BY data, hora DESC");
while($linha = mysql_fetch_array($mostrar)){
?>
<div id="titulo">
<font color="#FFFFFF">Postado por</font>: <a href="mailto:<?=$linha['email']?>"><?=$linha['nome']?></a>, <?=$linha['data']?>, <?=$linha['hora']?>
</div>
<div id="conteudo">
<?=$linha['mensagem']?>
</div>
<br/>
<?
}
?>

<?

if ($_GET['btn'] == "enviar"){
$nome = $_POST["nome"];
$email = $_POST["email"];
$mensagem = $_POST["mensagem"];
$sql = mysql_query("INSERT INTO comentarios (nome, email, mensagem, data, hora)
VALUES
('$nome','$email','$mensagem',now(),now())",$db);

print "
 <meta http-equiv=refresh content='0; url=index.php'>
"; 
}
?>
<p align="right"><font color="#000000" size="1" face="Verdana, Arial, Helvetica, sans-serif"><strong>Produzido 
  por Thiago Galatti</strong></font> </p>
</body>
</html>
