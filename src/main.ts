import AnalysisContext from './common/context/analysis_context/context';
import { HttpMainRoutes } from './Infraestrucure/routes/http.main.routes';
import { AnalysisServerConfig } from './Infraestrucure/server/analysis.server.config';
import { connEnvs } from './Infraestrucure/server/envs/envs';
import { HttpConection } from './Infraestrucure/server/http.conextion';
import { v4 as uuidv4 } from 'uuid';
import { run_test } from './test_newman/index.test';

// ============== Create context to manage data in memory ============ //
global.context = new AnalysisContext(uuidv4(), {});

// ============== Set a conection ================= //
const connection = new HttpConection(
    new AnalysisServerConfig(Number(connEnvs.server_port), new HttpMainRoutes())
);
connection.start();

// ======== RUN TEST WHEN INIT APP ============ //
/**
 *  You must see console test and you can see html report on test_newman/reports.html
 *  or go to http://localhost:<port>/api/test_view  
 */
run_test;