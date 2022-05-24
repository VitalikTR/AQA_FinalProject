import urlsPagesSwagLabs from "../../data/SwagLabs/urlsPagesSwagLabs";
import users from "../../data/SwagLabs/users";
import { LoginPageSwagLabsTS } from '../../support/pagesSwagLabs/loginPageSwagLabsTS';
import { ProductPageSwagLabsTS } from "../../support/pagesSwagLabs/productPageSwagLabsTS";

const loginPage = new LoginPageSwagLabsTS();
const productsPage = new ProductPageSwagLabsTS();

describe('Test suite to test web elements on the checkout two step page', () => {
    beforeEach('Login to the App', () => {
        loginPage.open().loginToTheApp(users.standardUser)
    });

        it('Verify the elements is displayed on the checkout two step page', () => {
            productsPage
                .addToCartAllproducts()
                .openShoppingCart()
                .openCheckoutStepOnePage()
                .openCheckoutStepTwoPage(users.standardUser)
                .urlPageVerify(urlsPagesSwagLabs.checkoutStepTwoPageUrl)
                .checkTwoStepPageLabelVerify()
                .summaryTotalLabelVerify()
                .finishButtonVerify()
        });
        
    afterEach('Logout of the App', () => {
        productsPage
            .logoutOfTheApp()
    })
});