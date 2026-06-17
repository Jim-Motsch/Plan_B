-- CreateTable
CREATE TABLE "Device" (
    "assetTag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "purchaseDate" TEXT NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("assetTag")
);
