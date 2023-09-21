provider "aws" {
  region = "us-east-2"
}

# 
resource "aws_instance" "todone_ec2" {
  ami           = "ami-01103fb68b3569475"
  instance_type = "t2.micro"
  key_name      = "todone"
  security_groups = ["todone"]

  tags = {
    Name = "todone_ec2"
  }
}

# Create a local variable to store the instance information as JSON
locals {
  todone_ec2_instance_info = {
    instance_id        = aws_instance.todone_ec2.id
    private_ip         = aws_instance.todone_ec2.private_ip
    public_ip          = aws_instance.todone_ec2.public_ip
    instance_type     = aws_instance.todone_ec2.instance_type
    availability_zone = aws_instance.todone_ec2.availability_zone
    # Add any other instance attributes you want to include in the JSON here
  }
}

# Write the instance information to a JSON file
resource "local_file" "todone_ec2_instance_info" {
  filename = "ec2_info.json"  # Name of the JSON file
  content  = jsonencode(local.todone_ec2_instance_info)
}
