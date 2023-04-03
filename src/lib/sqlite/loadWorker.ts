import type { WorkerMessage } from './types';

const workerImp = await import('./worker/worker.ts?worker');

export default function initWorker() {
	const worker = new workerImp.default();

	const msg: WorkerMessage = { message: 'abc' };
	console.log(`Sending message to worker:`, msg);
	worker.postMessage(msg);

	worker.addEventListener('message', async ({ data }: { data: WorkerMessage }) => {
		console.log('Received message from worker:', data.message);
	});
}
