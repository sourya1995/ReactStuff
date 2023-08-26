<>
    <div class="flex flex-col w-1/3">
        <div class="flex-grow">Header</div>
        <div class="flex flex-row"> //one full row for content
            <div class="text-center w-1/5">Left Sidebar</div>
            <div class="text-center w-3/5">Content</div>
            <div class="text-center w-1/5">Right Sidebar</div>
        </div>
        <div class="flex-grow">Footer</div>
    </div>

    <div class="flex flex-row flex-wrap w-1/3"> //everything is a row
        <div class="w-full">Header</div>
        <div class="text-center w-1/5">Left Sidebar</div>
        <div class="text-center w-3/5">Content</div>
        <div class="text-center w-1/5">Right Sidebar</div>
        <div class="w-full">Footer</div>
    </div>

    <div class="flex flex-row flex-wrap w-1/3">
        <div class="text-center w-3/5 order-3">Content</div>
        <div class="w-full order-1">Header</div>
        <div class="text-center w-1/5 order-2">Left Sidebar</div>
        <div class="text-center w-1/5 order-4">Right Sidebar</div>
        <div class="w-full order-5">Footer</div>
    </div>
    
    /*this is on large screens */
    <div class="w-full hidden lg:flex lg:flex-grow, lg:items-center lg:width-auto
     divide-black divide-y lg:divide-y-0" id="navbar-menu">
        <a class="block lg:mr-4 p-2 hover:bg-gray-200">Blog</a>
        ...
    </div>
</>