<?php 

class Model_Ordini extends Model {

    
	public function MostraOrdini(){
		$sqlString = "SELECT * FROM clienti ORDER BY Cognome, Nome";
		try{	
			$res = $this->DB->query($sqlString);
			var_dump($res);
			// return $res->fetch_all(MYSQLI_ASSOC);
		} catch(Exception $e) {
			return "Errore: {$e->getMessage()}";
		}
	}

}