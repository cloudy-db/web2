"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
class TestLogger extends core_1.logging.Logger {
    constructor(name, parent = null) {
        super(name, parent);
        this._latestEntries = [];
        this.subscribe((entry) => this._latestEntries.push(entry));
    }
    clear() {
        this._latestEntries = [];
    }
    includes(message) {
        return this._latestEntries.some((entry) => entry.message.includes(message));
    }
    test(re) {
        return this._latestEntries.some((entry) => re.test(entry.message));
    }
}
exports.TestLogger = TestLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1sb2dnZXIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L2J1aWxkX2FuZ3VsYXIvdGVzdC91dGlscy90ZXN0LWxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOztBQUVILCtDQUErQztBQUcvQyxnQkFBd0IsU0FBUSxjQUFPLENBQUMsTUFBTTtJQUU1QyxZQUFZLElBQVksRUFBRSxTQUFnQyxJQUFJO1FBQzVELEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFGZCxtQkFBYyxHQUF1QixFQUFFLENBQUM7UUFHOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQUksQ0FBQyxFQUFVO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQWxCRCxnQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGxvZ2dpbmcgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIFRlc3RMb2dnZXIgZXh0ZW5kcyBsb2dnaW5nLkxvZ2dlciB7XG4gIHByaXZhdGUgX2xhdGVzdEVudHJpZXM6IGxvZ2dpbmcuTG9nRW50cnlbXSA9IFtdO1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmVudDogbG9nZ2luZy5Mb2dnZXIgfCBudWxsID0gbnVsbCkge1xuICAgIHN1cGVyKG5hbWUsIHBhcmVudCk7XG4gICAgdGhpcy5zdWJzY3JpYmUoKGVudHJ5KSA9PiB0aGlzLl9sYXRlc3RFbnRyaWVzLnB1c2goZW50cnkpKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2xhdGVzdEVudHJpZXMgPSBbXTtcbiAgfVxuXG4gIGluY2x1ZGVzKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9sYXRlc3RFbnRyaWVzLnNvbWUoKGVudHJ5KSA9PiBlbnRyeS5tZXNzYWdlLmluY2x1ZGVzKG1lc3NhZ2UpKTtcbiAgfVxuXG4gIHRlc3QocmU6IFJlZ0V4cCkge1xuICAgIHJldHVybiB0aGlzLl9sYXRlc3RFbnRyaWVzLnNvbWUoKGVudHJ5KSA9PiByZS50ZXN0KGVudHJ5Lm1lc3NhZ2UpKTtcbiAgfVxufVxuIl19