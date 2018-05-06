import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';

export function zonify(zone: NgZone) {
	return <T>(source: Observable<T>) => (
		new Observable<T>(observer => {
			return source.subscribe({
				next(x) { zone.run(() => observer.next(x)); },
				error(err) { zone.run(() => observer.error(err)); },
				complete() { zone.run(() => observer.complete()); },
			});
		})
	);
}
