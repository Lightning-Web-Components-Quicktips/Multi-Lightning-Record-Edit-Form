# `Multiple Submit` Lightning-Record-Edit-Form 

YouTube Video Explanation: https://youtu.be/xbH_QX_Dyrk


Create multiple records at once using Salesforce Lightning Web Component: [lightning-record-edit-form](https://developer.salesforce.com/docs/component-library/bundle/lightning-record-edit-form).

## Things to remember
- Calling `submit()` on multiple forms at once may cause unexpected behavior if you redirect the user! Always make sure all `HTTP POST` requests have completed by using an `onsuccess` callback when submitting multiple `lightning-record-edit-form` components.
- Programmatically calling `submit()` on a `lightning-record-edit-form` **DOES NOT FIRE `onsubmit` EVENT**!

