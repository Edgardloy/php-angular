<?php 

abstract class Model {
    protected $DB;
    
    public function __construct() {
    	$settingsDB = require $GLOBALS['CONST']['CONFIG'] . 'db.php';
        $this->DB = Database::getInstanza($settingsDB);
    }
}