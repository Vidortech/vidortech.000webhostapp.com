
<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o campo de e-mail e senha estão definidos e não vazios
    if (isset($_POST["email"]) && isset($_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
        // Valores do formulário
        $email = $_POST["email"];
        $user_password = $_POST["password"]; // Renomeando a variável para evitar redefinição

        // Conexão com o banco de dados (substitua as informações de conexão conforme necessário)
        $servername = "localhost";
        $username = "root";
        $db_password = ""; // Coloque a senha do seu banco de dados aqui
        $dbname = "vidortech2742622";

        // Cria conexão
        $conn = new mysqli($servername, $username, $db_password, $dbname);

        // Verifica conexão
        if ($conn->connect_error) {
            die("Conexão falhou: " . $conn->connect_error);
        }

        // Consulta SQL para verificar as credenciais do usuário
        $sql = "SELECT id FROM vtc_users WHERE email = ? AND senha = ?";
        
        // Prepara a declaração SQL
        $stmt = $conn->prepare($sql);
        
        // Liga os parâmetros e executa a declaração
        $stmt->bind_param("ss", $email, $user_password);
        $stmt->execute();
        
        // Armazena o resultado da consulta
        $stmt->store_result();
        
        // Verifica se o usuário foi encontrado
        if ($stmt->num_rows > 0) {
            // Vincula o resultado da consulta às variáveis
            $stmt->bind_result($user_id);
            $stmt->fetch();
            
            // Usuário autenticado com sucesso, redireciona para a página inicial
            header("Location: /home?id=$user_id");
            exit();
        } else {
            // Credenciais inválidas
            header("Location: /home");
            echo '<script>alert("Credenciais inválidas!");</script>';

        }

        // Fecha a conexão
        $stmt->close();
        $conn->close();
    } else {
        // Se os campos estiverem vazios, exibe uma mensagem de erro
        echo "Por favor, preencha todos os campos.";
    }
}
?>

