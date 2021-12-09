import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import { watch } from 'chokidar';

// current process which is running the service
let currentRunProcess: ChildProcessWithoutNullStreams | undefined = undefined;

// attach the streams from build or run child process to current process std out and in
function attachStandardOutputToProcess(
  spawnedProcess: ChildProcessWithoutNullStreams,
) {
  spawnedProcess.stdout.pipe(process.stdout);
  spawnedProcess.stderr.pipe(process.stderr);
}

/**
 * @summary Given the command and args it runs those command, attach stdout and error attach event
 * handler to them , if the process should be killed before forking again it kills it.
 * @param command command
 * @param args arguments
 * @param shouldKill process should be killed first?
 * @returns
 */
function executeProcess(
  command: string,
  args: string[],
  shouldKill = false,
): Promise<void> {
  return new Promise((resolve: () => void, reject: (error: Error) => void) => {
    if (shouldKill && currentRunProcess) {
      const result = currentRunProcess.kill('SIGKILL');
      console.log('killing current process,.....', result);
    }

    const currentProcess = spawn(command, args, {
      detached: false,
      cwd: process.cwd(),
    });

    if (shouldKill) {
      currentRunProcess = currentProcess;
    }

    attachStandardOutputToProcess(currentProcess);

    currentProcess.on('message', (message: any) => {
      console.log('message came through');
      console.log(message);
    });

    currentProcess.on('close', function () {
      console.log('✅ process executed successfully');
      return resolve();
    });

    currentProcess.on('error', (error: Error) => {
      console.error('❌ there was an error while executing processs');
      console.error(error.message);
      console.error(error.name);
      return reject(error);
    });

    currentProcess.on('exit', function (code: number) {
      console.log('✅ process exited with', code);
      return resolve();
    });
  });
}

/**
 * @summary this function is responsible to build + run the project
 */
async function buildAndRun(): Promise<void> {
  console.log('building project in sync mode..............');
  await executeProcess('nest', ['build']);
  console.log('building process is done......');

  console.log('now starting the project');
  await executeProcess('node', ['./dist/backend/src/main'], true);
  console.log('...application started');
}

/**
 * debounce timeout handler so we don't trigger tons of build process just because 10 files changed
 */
let handler: NodeJS.Timeout | undefined;

/**
 * this function subscribes to file system inside src directory if any  thing changes inside those it will
 * restart the project
 */
async function start(): Promise<void> {
  watch('./src').on('all', async (event, path) => {
    if (handler) {
      clearTimeout(handler);
    }

    handler = setTimeout(() => {
      console.log('✅ building + running again', event, path);
      buildAndRun();
      handler = undefined;
    }, 3000);
  });
}

if (require.main === module) {
  start();
}
