provider "gcp"{
    access_key = ""
    secret_key = ""
    region     = "us-east1"
    zone       = "us-east1-b"
    project    = ""
}

resource "google_compute_instance" "default" {
    name         = "test"
    machine_type = "g1-small-1"
    zone         = "us-east1-b"
    

    tags = ["school", "student"]
}


    boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  } 

   scratch_disk {
    interface = "SCSI"
  }

  network_interface {
    network = "default"
    
    access_config {
      // Ephemeral IP
    }
  }

    metadata = {
    school = "student""
  }

   metadata_startup_script = 
   "
    #!/bin/bash
    sudo apt-get update 
    sudo apt -y install yum
    sudo apt -y install jq
   "

   