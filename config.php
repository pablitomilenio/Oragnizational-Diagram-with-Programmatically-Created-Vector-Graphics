<?php
require_once 'vendor/autoload.php';
 
$config = [
    'callback' => 'http://www.free-okr.com/OrgChart/index.php',
    'keys'     => [
                    'id' => '77j5b8lkj75jz9',
                    'secret' => 'bnrhv8IlrJXr5zBg'
                ],
    'scope'    => 'r_liteprofile r_emailaddress',
];
 
$adapter = new Hybridauth\Provider\LinkedIn( $config );