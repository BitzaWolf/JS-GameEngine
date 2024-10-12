<?php
class Player {
    public $name = 'Player';
    public $level = 1;
    public $penis = true;

    function __construct($data) {
        $this->name = $data['name'];
    }
}
?>
