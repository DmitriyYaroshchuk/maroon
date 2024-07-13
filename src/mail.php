<?php
// Подключение библиотеки
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Получение данных
//$json = file_get_contents('php://input'); // Получение json строки
//$data = json_decode($json, true); // Преобразование json
//
//$name = $data['name'];
//$surname = $data['surname'];
//$tel = $data['tel'];


// Получение данных из $_POST
$name = $_POST['name'];
$surname = $_POST['surname'];
$tel = $_POST['tel'];
$products_json = $_POST['product']; // Получаем строку JSON с продуктами
$totalPrice = $_POST['totalPrice'];

$title = 'Заявка с сайта'; // Название письма

// Декодируем строку JSON в массив PHP
$products = json_decode($products_json, true);

// Переменная для хранения информации о продуктах
$productsInfo = '';

// Перебираем каждый продукт и добавляем его информацию в переменную $productsInfo
foreach ($products as $product) {
    $productInfo = 'Название: ' . $product['name'] . ', Количество: ' . $product['count'] . ', Цена: ' . $product['price'];
    $productsInfo .= '<p><strong>' . $productInfo . '</strong></p>';
}


$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Фамилия: <strong>'.$surname.'</strong></p>'.
        '<p>Номер телеофна: <strong>'.$tel.'</strong></p>'.
        '<p>Информация о продуктах:</p>'.
        $productsInfo.
        '<p>Итоговая стоимость: <strong>'.$totalPrice.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  // Настройки почты отправителя
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'dima030215@gmail.com'; // Логин на почте
  $mail->Password   = 'oxmd awfr ppkp bgcq'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('dima030215@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');

  // Сообщение об успешной отправке
  echo ('Сообщение успешно отправлено');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}');
}

