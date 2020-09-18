<?php
$db = new PDO("mysql: host=localhost;dbname=freelancers", "root", "");
$req = $db->query("SELECT *FROM projets");
while($res = $req->fetch()) {
  $t['titre'] = $res['titre'];  
}
echo json_encode($t);
?>