<?php
// definições de host, database, usuário e senha
$host = "127.0.0.1:3306";
$db   = "tiaw";
$user = "root";
$pass = "J2406k;#";
// conecta ao banco de dados
$con = mysql_pconnect($host, $user, $pass) or trigger_error(mysql_error(),E_USER_ERROR);
// seleciona a base de dados em que vamos trabalhar
mysql_select_db($db, $con);
// cria a instrução SQL que vai selecionar os dados
$query = sprintf("SELECT usuario, email, telefone, senha, confirmarsenha FROM criar_login");
// executa a query
$dados = mysql_query($query, $con) or die(mysql_error());
// transforma os dados em um array
$linha = mysql_fetch_assoc($dados);
// calcula quantos dados retornaram
$total = mysql_num_rows($dados);

$_POST['usuario'];

?>


