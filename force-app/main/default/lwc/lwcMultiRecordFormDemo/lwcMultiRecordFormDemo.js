import { LightningElement, track } from "lwc";
import { NavigationMixin } from "lightning/navigation";
export default class LwcMultiRecordFormDemo extends NavigationMixin(
  LightningElement
) {
  accountId;
  countOfContactsSaved = 0;

  /**
   *
   */
  handleSave(event) {
    console.info("save");
    let accountForm = this.template.querySelector('lightning-record-edit-form[data-id="accountForm"]');
    accountForm.submit();
  }

  /**
   *
   * @param {*} event
   */
  handleAccountSuccess(event) {
    this.accountId = event.detail.id;
    console.info("Account is saved, new id is: " + this.accountId);

    this.template.querySelectorAll('lightning-input-field[data-id="contactAccountId"]').forEach((field) => {
      field.value = this.accountId;
    });

    this.template
      .querySelectorAll('lightning-record-edit-form[data-id="contactForm"]')
      .forEach((form) => {
        form.submit();
      });
  }

  /**
   *
   * @param {*} event
   */
  handleContactSaveSuccess(event) {
    this.countOfContactsSaved = this.countOfContactsSaved += 1;
    // once we have saved 3 contacts then we can navigate!
    if (this.countOfContactsSaved === 3) {
      console.log("3 contacts saved! Lets redirect!");
      this.navigateToNewAccount();
    }
  }

  /**
   *
   */
  navigateToNewAccount() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.accountId,
        actionName: "view"
      }
    });
  }

  handleReset(event) {
    this.accountId = "";
  }
}