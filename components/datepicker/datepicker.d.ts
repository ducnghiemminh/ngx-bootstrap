import { ControlValueAccessor, NgModel } from 'angular2/common';
export declare class DatePicker implements ControlValueAccessor {
    cd: NgModel;
    private _activeDate;
    datepickerMode: string;
    initDate: Date;
    minDate: Date;
    maxDate: Date;
    minMode: string;
    maxMode: string;
    showWeeks: boolean;
    formatDay: string;
    formatMonth: string;
    formatYear: string;
    formatDayHeader: string;
    formatDayTitle: string;
    formatMonthTitle: string;
    startingDay: number;
    yearRange: number;
    onlyCurrentMonth: boolean;
    shortcutPropagation: boolean;
    customClass: Array<{
        date: Date;
        mode: string;
        clazz: string;
    }>;
    activeDate: Date;
    dateDisabled: any;
    constructor(cd: NgModel);
    private _now;
    private onUpdate(event);
    writeValue(value: any): void;
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
}