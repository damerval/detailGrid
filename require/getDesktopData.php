<?php
/**
 * Created by Philippe.
 * User: pdamerval
 * Date: 3/10/2017
 * Time: 10:25 AM
 */

require_once ('sqlSrv.php');

$location = isset($_GET['loc']) ? $_GET['loc'] : 'ANCHORAGE JAIL';
$ipo = isset($_GET['ipo']) ? $_GET['ipo'] : null;
if (null == $ipo || $ipo == "ALL IPOs") {
  $ipoClause = "";
} else {
  $ipoClause = " AND RTRIM(COALESCE(ipo, '')) = '" . ($ipo == "NO IPO ASSIGNED" ? "" : $ipo) . "'";
}

//$sql = "SELECT * FROM omp_lsi WHERE loc = '" . $location . "'" . $ipoClause;
//echo $sql;

echo getSet("SELECT * FROM omp_lsi WHERE loc = '" . $location . "'" . $ipoClause, null);