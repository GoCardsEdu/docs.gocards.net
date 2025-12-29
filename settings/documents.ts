import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
    {
        title: "Getting Started",
        href: "/getting-started"
    },
    {
        title: "Home Screen",
        href: "/home",
        items: [
            {
                title: "Database Backup",
                href: "/home/database-backup"
            }
        ]
    },
    {
        title: "Browse Mode",
        href: "/browse"
    },
    {
        title: "Cards List",
        href: "/cards-list",
        items: [
            {
                title: "Editing Cards",
                href: "/editing"
            },
            {
                title: "Deleting Cards",
                href: "/deleting"
            },
            {
                title: "Reordering Cards",
                href: "/reordering"
            },
            {
                title: "Multi-Select",
                href: "/multi-select"
            },
            {
                title: "Formatting Cards",
                href: "/formatting"
            }
        ]
    },
    {
        title: "Study Mode",
        href: "/study"
    },
    {
        title: "Settings",
        href: "/settings",
        items: [
            {
                title: "Deck Settings",
                href: "/settings/deck-settings"
            },
            {
                title: "App Settings",
                href: "/settings/app-settings"
            }
        ]
    },
    {
        title: "Sync, Export & Import",
        href: "/sync-export-import",
        items: [
            {
                title: "Sync cards with File",
                href: "/sync-cards"
            },
            {
                title: "Cloud Storage",
                href: "/sync-export-import/cloud-storage"
            },
            {
                title: "Export Cards",
                href: "/sync-export-import/export-cards"
            },
            {
                title: "Import Cards",
                href: "/sync-export-import/import-cards"
            },
            {
                title: "File Format",
                href: "/sync-export-import/file-format"
            },
            {
                title: "Troubleshooting",
                href: "/sync-export-import/troubleshooting"
            }
        ]
    },
    {
        title: "Support",
        href: "/support",
        items: [
            {
                title: "FAQ",
                href: "/support/faq"
            },
            {
                title: "Tips & Best Practices",
                href: "/support/tips"
            }
        ]
    }
]
