-- CreateTable
CREATE TABLE "Recepie" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(64) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "ingridients" TEXT[],
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "Recepie_pkey" PRIMARY KEY ("id")
);
