<?php 
class Controller_Main extends Controller {	

	public function __construct($route){
		parent::__construct($route);
	}

    public function indexAction() {
		require $GLOBALS['CONST']['WWW'] . 'build'. DS .'index.html';    	
    }
}