<?php
/**
 * Created by Philippe.
 * User: pdamerval
 * Date: 3/10/2017
 * Time: 10:25 AM
 */

require_once ('sqlSrv.php');

$location = isset($_GET['loc']) ? $_GET['loc'] : 'ANCHORAGE JAIL';

echo getSet("SELECT * FROM omp_lsi WHERE loc = '" . $location . "'", null);