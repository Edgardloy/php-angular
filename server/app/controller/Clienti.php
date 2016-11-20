<?php 

class Controller_Clienti extends Controller {

	private $model;

	public function __construct($route){
		parent::__construct($route);
		$this->model = new Model_Clienti();
	}

    public function indexAction() {
        $this->model->MostraClienti();
    }

}