<?php 

class Controller_Ordini extends Controller {

	private $model;

	public function __construct($route){
		parent::__construct($route);
		$this->model = new Model_Ordini();
	}

    public function indexAction() {
        $this->model->MostraOrdini();
    }

}