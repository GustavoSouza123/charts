<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Chart.js</title>
</head>
<body>
    <?php
        $pdo = new PDO('mysql:host=localhost', 'root', '');
        $sql = 'CREATE DATABASE IF NOT EXISTS `pesquisaetec`;
                USE `pesquisaetec`;
                CREATE TABLE IF NOT EXISTS `pesquisa` (
                    ID INT NOT NULL AUTO_INCREMENT,
                    nomeCompleto VARCHAR(50) NOT NULL,
                    dataDeNascimento DATE NOT NULL,
                    idade VARCHAR(3) NOT NULL,
                    email VARCHAR(64) NOT NULL,
                    sexo enum("masculino", "feminino", "outro"),
                    celularNumber VARCHAR(20) NOT NULL,
    
                    /*Em qual período você desejaria estudar?*/
                    manha TINYINT NOT NULL,
                    tarde TINYINT NOT NULL,
                    noite TINYINT NOT NULL,
    
                    /*Qual curso você desejaria fazer?*/
                    desenvolvimentoDeSistemas TINYINT NOT NULL,
                    meioAmbiente TINYINT NOT NULL,
                    nutricao TINYINT NOT NULL,
                    administracao TINYINT NOT NULL,
                    seguranca TINYINT NOT NULL,
                    eletronica TINYINT NOT NULL,
                    PRIMARY KEY(ID)
                );';
        $pdo->exec($sql);

        $queries = [
            "SELECT COUNT(*) FROM `pesquisa` WHERE manha = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE tarde = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE noite = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE desenvolvimentoDeSistemas = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE meioAmbiente = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE nutricao = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE administracao = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE seguranca = 1;",
            "SELECT COUNT(*) FROM `pesquisa` WHERE eletronica = 1;"
        ];
        $results = [];

        foreach($queries as $query) {
            $sql = $pdo->prepare($query);
            $sql->execute();
            $results[] = $sql->fetchColumn();
        }

        $periodo = array_slice($results, 0, 3);
        $curso = array_slice($results, 3, 6);

        setcookie("periodo", implode(",", $periodo), time()+60*60*24);
        setcookie("curso", implode(",", $curso), time()+60*60*24);
        // echo $_COOKIE["periodo"] . "<br>" . $_COOKIE["curso"];
    ?>

    <div class="container">
        <h1>Chart.js</h1>
        <p>Simple yet flexible JavaScript charting library for the modern web</p>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- Chart.js library -->
    <script src="script.js"></script>
</body>
</html>
