<?php
/**
 * Created by pdamerval.
 * Date: 3/10/2017
 * Time: 9:04 AM
 */

require_once ('sqlSrv.php');

$str = getSet("SELECT COUNT(*) as total_tables FROM sys.tables", null);

echo $str;