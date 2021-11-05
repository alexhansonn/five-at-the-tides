new fullpage('#full-page', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({ delay: 0.3 });
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })

        if (destination.index === 1) {
            const chairs = document.querySelectorAll(".chair");
            const description = document.querySelectorAll(".description");
            const tl2 = new TimelineMax({ delay: 0.1 });

            tl2.fromTo(chairs, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(description, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo(chairs[1], 1.5, { opacity: 0 }, { opacity: 1 })
            .fromTo(chairs[2], 1.5, { opacity: 0 }, { opacity: 1 })
        }
    }
});