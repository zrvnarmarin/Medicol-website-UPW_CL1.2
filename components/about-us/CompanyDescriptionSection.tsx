import { QuotesBlue } from "@/public/icons"

export default function CompanyDescriptionSection() {
    return (
        <section className="flex flex-row px-4 gap-6 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 3xl:px-96 bg-[#F7FCFD] mt-12">
            <div className="hidden md:block">
                <QuotesBlue />
            </div>
            <p className="pt-12">
                Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id mauris. Duis posuere hendrerit est lacinia consectetur. Morbi nec volutpat ipsum. Cras blandit efficitur velit ut consequat. Suspendisse potenti.

                Quisque vitae nisi tempor, ultricies purus et, maximus metus. Phasellus tempus a lorem vel ultricies. Pellentesque a pharetra tellus, sit amet blandit ante. Morbi sollicitudin lacus ut orci fermentum, in vestibulum nulla egestas. Pellentesque nisi orci, ullamcorper ac bibendum quis, congue eget tellus. In sed est dolor. Mauris gravida sem diam, et placerat metus lacinia non. Morbi pellentesque ultricies ante at ultricies. Suspendisse vulputate elit vel sapien volutpat pharetra. In hac habitasse platea dictumst.

                Integer felis lorem, cursus ac leo quis, tristique elementum dolor. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed interdum tincidunt suscipit. Sed sit amet tincidunt libero. Praesent id condimentum lacus. Vivamus congue scelerisque pulvinar.
            </p>
        </section>
    )
}