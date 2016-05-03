/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /**
     * Checks to see if the variables in the RSS
     * feeds are correctly defined
     */
    describe('RSS Feeds', function() {

        /**
         * Checks to see if all variables in
         * the feed categories are defined
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * Checks to see if all the feed
         * categories have an url defined
         */
        it('contains URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /**
         * Checks to see if all the feed
         * categories have a name defined
         */
        it('has name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /**
     * Tests for the functions of the menu
     */
    describe('The menu', function() {

        var body = $('body'),
            menuHamburger = $('#menu-hamburger');

        /**
         * Checks to see if the menu is hidden by default
         */
        it ('has hidden menu by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /**
         * Checks the toggle funcionality of the menu works
         */
        it ('changes visibility when menu is clicked', function() {
            menuHamburger.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuHamburger.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

    /**
     * Checks to see if the list had items inside on when loading data
     * by checking if the list has child elements after loading
     */
    describe('Initial Entries', function() {

        var feedList = $('#feed');

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('has at least a single entry', function(done) {
            expect(feedList.children().length).toBeGreaterThan(0);
            done();
        });

    });

    /**
     * Checks to see if the content is loaded on each list item
     */
    describe('New Feed Selection', function() {

        var feeds = $('#feed');

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /**
         * Loops over each item and checks to see if the
         * "href" attribute and "h2" tag has strings inside.
         */
        it('Content changes in new feed', function(done) {
            feeds.children().each(function(index, value) {
                expect($(this).attr('href')).toBeDefined();
                expect($(this).attr('href').length).not.toBe(0);
                expect($(this).find('h2').text()).toBeDefined();
                expect($(this).find('h2').text().length).not.toBe(0);
            });
            done();
        });

    });
}());
